import { configureStore } from '@reduxjs/toolkit';
import instrumentReducer from './slices/instrumentSlice';
import assignmentReducer from './slices/assigmentSlice';
import itemReducer from './slices/itemSlice';

export const store = configureStore({
  reducer: {
    instruments: instrumentReducer,
    assignments: assignmentReducer,
    items: itemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
