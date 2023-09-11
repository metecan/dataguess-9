import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LanguageState {
  currentLanguage: string;
}

const initialState: LanguageState = {
  currentLanguage: 'en',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<string>) {
      state.currentLanguage = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
