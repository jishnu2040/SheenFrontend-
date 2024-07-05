import { configureStore } from '@reduxjs/toolkit';
import partnerReducer from './slices/partnerSlice';

const store = configureStore({
  reducer: {
    partner: partnerReducer
  }
});

export default store;
