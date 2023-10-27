import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './slice';

const store = configureStore({
  reducer: greetingSlice,

});

export default store;
