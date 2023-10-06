import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '@/store/counterSlice/counterSlice.js';
export const store = configureStore({
  reducer: {counterSlice},
})