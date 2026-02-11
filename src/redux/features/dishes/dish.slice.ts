import { createSlice } from '@reduxjs/toolkit';
import type { IDish } from '../../../types/dish/dish';
import { getDish, getDishes, postNewDish } from './dish.api';
import type { IDishMutation } from '../../../types/dish/dish-mutation';

export interface IDishState {
  dishes: IDish[];
  dish: IDishMutation | null;
  loading: {
    fetchLoading: boolean;
    deleteLoading: boolean;
    postLoading: boolean;
  };
  isError: boolean;
}

const initialState: IDishState = {
  dishes: [],
  dish: null,
  loading: {
    fetchLoading: false,
    deleteLoading: false,
    postLoading: false,
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
      state.loading.postLoading = true;
    });
    builder.addCase(postNewDish.fulfilled, (state) => {
      state.isError = false;
      state.loading.postLoading = false;
    });
    builder.addCase(postNewDish.rejected, (state) => {
      state.isError = true;
      state.loading.postLoading = false;
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
  },
});

export const dishReducer = dishSlice.reducer;
