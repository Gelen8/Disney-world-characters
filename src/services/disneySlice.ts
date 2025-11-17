import { createSlice, PayloadAction, createSelector, createAsyncThunk } from "@reduxjs/toolkit";
import { TCard } from "../utils/types";
import { getCharacterByIdApi, getCharactersApi } from "../utils/disney-api";

export const loadCharacters = createAsyncThunk(
  'characters/loadCharacters',
  getCharactersApi
);

export const loadCharacterById = createAsyncThunk(
  'characters/loadCharacterById',
  getCharacterByIdApi
)

type TCharacter = TCard & {
  liked?: boolean
}

type TDisneyStore = {
  characters: Array<TCharacter>;
  selectedCard: TCharacter | null;
  loading: boolean;
  error: string | null;
};

const initialState: TDisneyStore = {
  characters: [],
  selectedCard: null,
  loading: false,
  error: null
};

export const disneySlice = createSlice({
  name: 'characters',
  initialState: initialState,
  reducers: {
    removeItem: (state, action: PayloadAction<number>) => {
      state.characters = state.characters.filter((item) => item._id !== action.payload)
    },
    addItem: (state, action: PayloadAction<TCard>) => {
      state.characters.push(action.payload)
    },
    toggleLike: (state, action: PayloadAction<number>) => {
      const toggleCard = state.characters.find((item) => item._id === action.payload);
      if (toggleCard) toggleCard.liked = !toggleCard.liked;
    }
  },
  selectors: {
    selectNews: (state) => state.characters,
    selectNewsLoading: (state) => state.loading,
    selectNewsError: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCharacters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload;
        state.error = null;
      })
      .addCase(loadCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || 'Ошибка загрузки'    
      })
      .addCase(loadCharacterById.fulfilled, (state, action) => {
        state.selectedCard = action.payload;
        state.error = null;
      })
      .addCase(loadCharacterById.rejected, (state, action) => {
        state.error = action.error?.message || 'Ошибка загрузки' 
      })
  },
});

export const newsReducer = disneySlice.reducer;

export const {
  selectNews,
  selectNewsLoading,
  selectNewsError
} = disneySlice.selectors;

export const { removeItem, addItem, toggleLike } = disneySlice.actions; 

export const selectItemById = createSelector(
  disneySlice.selectors.selectNews,
  (_, id) => id,
  (news: TCharacter[], id: string) =>
    news.find((item) => String(item._id) === id)
);

export const selectLiked = createSelector(
  [selectNews],
  (news) => news.filter((item) => item.liked === true)
)