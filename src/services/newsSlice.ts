import { createSlice, PayloadAction, createSelector, createAsyncThunk } from "@reduxjs/toolkit";
import { TCard } from "../utils/types";
import { getNewsApi } from "../utils/news-api";

export const loadNews = createAsyncThunk(
  'news/loadNews',
  getNewsApi
);

type TCharacter = TCard & {
  liked?: boolean
}

type TNewsStore = {
  news: Array<TCharacter>;
  liked: string[];
  loading: boolean;
  error: string | null;
};

const initialState: TNewsStore = {
  news: [],
  liked: [],
  loading: false,
  error: null
};

export const newsSlice = createSlice({
  name: 'news',
  initialState: initialState,
  reducers: {
    removeItem: (state, action: PayloadAction<number>) => {
      state.news = state.news.filter((item) => item._id !== action.payload)
    },
    addItem: (state, action: PayloadAction<TCard>) => {
      state.news.push(action.payload)
    },
    toggleLike: (state, action: PayloadAction<number>) => {
      const toggleCard = state.news.find((item) => item._id === action.payload);
      if (toggleCard) toggleCard.liked = !toggleCard.liked;
    }
  },
  selectors: {
    selectNews: (state) => state.news,
    selectLiked: (state) => state.news.filter((item) => item.liked === true),
    selectNewsLoading: (state) => state.loading,
    selectNewsError: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadNews.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload;
        state.error = null;
      })
      .addCase(loadNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || 'Ошибка загрузки'    })
    
  },
});

export const newsReducer = newsSlice.reducer;

export const {
  selectNews,
  selectNewsLoading,
  selectNewsError,
  selectLiked
} = newsSlice.selectors;

export const { removeItem, addItem, toggleLike } = newsSlice.actions; 

export const selectItemById = createSelector(
  newsSlice.selectors.selectNews,
  (_, id) => id,
  (news: TCharacter[], id: string) =>
    news.find((item) => String(item._id) === id)
);