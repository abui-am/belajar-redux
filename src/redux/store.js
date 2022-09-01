import { configureStore } from '@reduxjs/toolkit';
import appReducer from './features/app';
import counterReducer from './features/counter';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    app: appReducer,
  },
});
