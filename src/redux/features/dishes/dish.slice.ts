import { createSlice } from '@reduxjs/toolkit';
import type { IDish } from '../../../types/dish/dish';
import { getDish, getDishes, postNewDish, updateDish } from './dish.api';
import type { IDishMutation } from '../../../types/dish/dish-mutation';

export interface IDishState {
  dishes: IDish[];
  dish: IDishMutation | null;
  loading: {
    fetchLoading: boolean;
    deleteLoading: boolean;
    sendLoading: boolean;
  };
  isError: boolean;
}

const initialState: IDishState = {
  dishes: [],
  dish: null,
  loading: {
    fetchLoading: false,
    deleteLoading: false,
    sendLoading: false,
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
      state.loading.sendLoading = true;
    });
    builder.addCase(postNewDish.fulfilled, (state) => {
      state.isError = false;
      state.loading.sendLoading = false;
    });
    builder.addCase(postNewDish.rejected, (state) => {
      state.isError = true;
      state.loading.sendLoading = false;
    });

    builder.addCase(getDishes.pending, (state) => {
      state.loading.fetchLoading = true;
      state.isError = false;
    });
    builder.addCase(getDishes.fulfilled, (state, { payload: dishes }) => {
      state.loading.fetchLoading = false;
      state.isError = false;
      state.dishes = dishes;
    });
    builder.addCase(getDishes.rejected, (state) => {
      state.loading.fetchLoading = false;
      state.isError = true;
    });

    builder.addCase(getDish.pending, (state) => {
      state.loading.fetchLoading = true;
      state.isError = false;
    });
    builder.addCase(getDish.fulfilled, (state, { payload: dish }) => {
      state.loading.fetchLoading = false;
      state.isError = false;
      state.dish = dish;
    });
    builder.addCase(getDish.rejected, (state) => {
      state.loading.fetchLoading = false;
      state.isError = true;
    });

    builder.addCase(updateDish.pending, (state) => {
      state.loading.sendLoading = true;
      state.isError = false;
    });
    builder.addCase(updateDish.fulfilled, (state) => {
      state.loading.sendLoading = false;
      state.isError = false;
    });
    builder.addCase(updateDish.rejected, (state) => {
      state.loading.sendLoading = false;
      state.isError = true;
    });
  },
});

export const dishReducer = dishSlice.reducer;
