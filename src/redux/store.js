import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './jobSlice'; // doğru dosyadan import ettiğine emin ol

export const store = configureStore({
  reducer: {
    job: jobReducer, // BURADA "job" key'i olmalı
  },
});
