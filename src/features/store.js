import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';
import usersReducer from './users/usersSlice';
import rocketsSlice from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    users: usersReducer,
    rockets: rocketsSlice,
  },
});

export default store;
