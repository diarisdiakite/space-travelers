import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';
import usersReducer from './users/usersSlice';
import rocketsReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    users: usersReducer,
    rockets: rocketsReducer,
  },
});

export default store;
