import type { RootState } from '../../app/store';

export const selectDishes = (state: RootState) => state.dishReducer.dishes;

export const selectDish = (state: RootState) => state.dishReducer.dish;

export const selectLoading = (state: RootState) => state.dishReducer.loading;

export const selectIsError = (state: RootState) => state.dishReducer.isError;
