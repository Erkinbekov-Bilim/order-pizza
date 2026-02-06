import { createSlice } from '@reduxjs/toolkit';
import type { IDish } from '../../../types/dish/dish';
import { postNewDish } from './dish.api';

interface IDishState {
  dishes: IDish[];
  dish: IDish | null;
  loading: {
    fetch: boolean;
    delete: boolean;
    send: boolean;
  };
  isError: boolean;
}

const initialState: IDishState = {
  dishes: [],
  dish: null,
  loading: {
    fetch: false,
    delete: false,
    send: false,
  },
  isError: false,
};

export const dishSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postNewDish.pending, (state) => {
      state.isError = false;
      state.loading.send = true;
    });
    builder.addCase(postNewDish.fulfilled, (state) => {
      state.isError = false;
      state.loading.send = false;
    });
    builder.addCase(postNewDish.rejected, (state) => {
      state.isError = true;
      state.loading.send = false;
    });
  },
});

export const dishReducer = dishSlice.reducer;
