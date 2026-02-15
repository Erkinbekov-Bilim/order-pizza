import { configureStore } from '@reduxjs/toolkit';
import { dishReducer } from '../features/dishes/dish.slice';
import { dishCartReducer } from '../features/dishes/dishCart/dishCart.slice';

export const store = configureStore({
  reducer: {
    dishReducer,
    dishCartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
