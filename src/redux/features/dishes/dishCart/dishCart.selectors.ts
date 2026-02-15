import type { RootState } from '../../../app/store';

export const selectCartDish = (state: RootState) =>
  state.dishCartReducer.dishCart;
