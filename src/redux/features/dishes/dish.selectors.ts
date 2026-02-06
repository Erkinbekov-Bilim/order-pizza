import type { RootState } from '../../app/store';

export const selectDishes = (state: RootState) => state.dishReducer.dishes;

export const selectDish = (state: RootState) => state.dishReducer.dish;

export const selectLoadingFetch = (state: RootState) =>
  state.dishReducer.loading.fetch;

export const selectLoadingSend = (state: RootState) =>
  state.dishReducer.loading.send;

export const selectLoadingDelete = (state: RootState) =>
  state.dishReducer.loading.delete;
