import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  users: [
    {
      id: 1,
      name: 'My profile',
      description: 'User\'s description',
      missionsByUser: [],
      rocketsByUser: [],
    },
  ],
  status: '',
  error: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    checkUser: (state, action) => {
      state.users = action.payload === 'Under construction'
        ? 'Under construction'
        : state.users;
    },
  },

});

export const selectAllUsers = (state) => state.users.users;

export const getUserStatus = (state) => state.users.status;

export const getTotalMissionsByUser = (state) => state.users.totalMissionsByUser;

export const getTotalRocketsByUser = (state) => state.users.totalRocketsByUser;

export const selectUserById = (state, userId) => state.users.users.find(
  (user) => user.id === userId,
);

export const { addUser, removeUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;
