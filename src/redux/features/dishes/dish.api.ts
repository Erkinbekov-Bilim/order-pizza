import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IDishMutation } from '../../../types/dish/dish-mutation';
import axiosAPI from '../../../api/axiosApi';
import type { IDish } from '../../../types/dish/dish';
import type { IDishApi } from '../../../types/dish/dish-api';

export const postNewDish = createAsyncThunk<void, IDishMutation>(
  'dish/postNewDish',
  async (dish) => {
    axiosAPI.post<IDishMutation>('dishes.json', dish);
  },
);

export const getDishes = createAsyncThunk<IDish[]>(
  'dish/getDishes',
  async () => {
    const response = await axiosAPI.get<IDishApi>('/dishes.json');
    const dishesData = response.data;

    if (dishesData) {
      const dishesIDS: string[] = Object.keys(dishesData);

      const dishes: IDish[] = dishesIDS.map((id) => {
        return {
          ...dishesData[id],
          id,
        };
      });

      return dishes;
    }

    return [];
  },
);

export const getDish = createAsyncThunk<IDishMutation, { id: string }>(
  'dish/getDish',
  async ({ id }) => {
    const response = await axiosAPI.get<IDishMutation>(`/dishes${id}.json`);
    const data = response.data;

    return data;
  },
);

export const updateDish = createAsyncThunk<void, { dish: IDishMutation }>(
  'dish/putDish',
  async ({ dish }) => {
    await axiosAPI.put<IDishMutation>('/dishes.json', dish);
  },
);
