import { configureStore } from '@reduxjs/toolkit';
import { dishReducer } from '../features/dishes/dish.slice';

export const store = configureStore({
  reducer: {
    dishReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
