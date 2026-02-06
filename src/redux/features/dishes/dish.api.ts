import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IDishMutation } from '../../../types/dish/dish-mutation';
import axiosAPI from '../../../api/axiosApi';

export const postNewDish = createAsyncThunk<void, IDishMutation>(
  'dish/postNewDish',
  async (dish) => {
    axiosAPI.post<IDishMutation>('dishes.json', dish);
  },
);
