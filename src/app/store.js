import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/appReducer';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
