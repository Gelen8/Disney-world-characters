import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { TCard } from "../components/card/type";

type TNewsStore = {
  news: Array<TCard>;
  loading: boolean;
  error: string | null;
};

const initialState: TNewsStore = {
  news: [],
  loading: false,
  error: null
};

const newsSlice = createSlice({
  name: 'newsSlice',
  initialState: initialState,
  reducers: {
    removeItem: (state, action: PayloadAction<string>) => {
      state.news = state.news.filter((item) => item.id !== action.payload)
    },
    addItem: (state, action: PayloadAction<TCard>) => {
      state.news.push(action.payload)
    }
  },
  selectors: {
    selectNews: (state) => state.news,
    selectNewsLoading: (state) => state.loading,
    selectNewsError: (state) => state.error,
  }
});

export const newsReducer = newsSlice.reducer;

export const {
  selectNews,
  selectNewsLoading,
  selectNewsError
} = newsSlice.selectors;

export const selectItemById = createSelector(
  newsSlice.selectors.selectNews,
  (state, id) => id,
  (news: TCard[], id: string) =>
    news.find((item) => item.id === id)
);