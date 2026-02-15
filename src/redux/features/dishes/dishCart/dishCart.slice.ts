import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IDishCart } from '../../../../types/dish/cart/dishCart';
import type { IDish } from '../../../../types/dish/dish';

export interface IDishCartState {
  dishCart: IDishCart[];
}

const initialState: IDishCartState = {
  dishCart: [],
};

export const dishCartSlice = createSlice({
  name: 'dishCart',
  initialState,
  reducers: {
    addDishToCart: (state, action: PayloadAction<IDish>) => {
      const dishCart: IDishCart[] = state.dishCart;
      const dish: IDish = action.payload;

      const foundDish = dishCart.find((cart) => cart.dish.id === dish.id);

      if (foundDish) {
        foundDish.count += 1;
      } else {
        dishCart.push({ dish, count: 1 });
      }
    }
  },
});

export const dishCartReducer = dishCartSlice.reducer;
export const { addDishToCart } = dishCartSlice.actions;
