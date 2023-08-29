import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FEATURE_URL = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  loading: false,
  missions: [],
  error: '',
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  try {
    const response = await axios.get(FEATURE_URL);

    if (response.status !== 200) {
      throw new Error('Failed to fetch missions');
    }
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch the data, ${error}`);
  }
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,

  reducers: {
    setFetchedMissions: (state, action) => {
      state.missions = action.payload;
      console.log(state.missions);
      state.loading = false;
      state.error = '';
    },
    reserveMission: () => {

    },
    cancelMissionReservation: () => {

    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.loading = false;
      state.missions = action.payload;
      state.error = '';
    });
    builder.addCase(fetchMissions.rejected, (state, action) => {
      state.loading = false;
      state.missions = [];
      state.error = action.error ? action.error.message : 'Unknown error occured';
    });
  },
});

export const selectAllMissions = (state) => state.missions.missions;

export const selectMissionsById = (state, missionId) => state.missions.missions.find(
  (mission) => mission.mission_id === missionId,
);

export const selectMissionsByUser = createSelector(
  [selectAllMissions, (_, userId) => userId],
  (missions, userId) => missions.filter((mission) => mission.userId === userId),
);

export const {
  setFetchedMissions, reserveMission,
  cancelMissionReservation,
} = missionsSlice.actions;

export default missionsSlice.reducer;
