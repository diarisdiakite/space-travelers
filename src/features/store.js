import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';
import usersReducer from './users/usersSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    users: usersReducer,
  },
});

export default store;
