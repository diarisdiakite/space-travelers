import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import fetchMissionsAPI from './fetchMissionsAPI';

const initialState = {
  loading: false,
  missions: [],
  error: '',
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => fetchMissionsAPI());

const missionsSlice = createSlice({
  name: 'missions',
  initialState,

  reducers: {
    setFetchedMissions: (state) => {
      const selectedMissions = state.missions.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        desription: mission.description,
        reserved: false,
      }));
      state.missions = selectedMissions;
      state.loading = false;
      state.error = '';
    },
    joinMission: (state, action) => {
      const missionId = action.payload;
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id !== missionId) return mission;
        return { ...mission, reserved: true };
      });
    },
    cancelMissionParticipation: (state, action) => {
      const missionId = action.payload;
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id !== missionId) return mission;
        return { ...mission, reserved: false };
      });
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

export const selectAllJoinedMissions = (state) => state.missions.missions.filter(
  (mission) => mission.reserved === true,
);

export const selectMissionsById = (state, missionId) => state.missions.missions.find(
  (mission) => mission.mission_id === missionId,
);

export const selectMissionsByUser = createSelector(
  [selectAllMissions, (_, userId) => userId],
  (missions, userId) => missions.filter((mission) => mission.userId === userId),
);

export const {
  setFetchedMissions, joinMission,
  cancelMissionParticipation,
} = missionsSlice.actions;

export default missionsSlice.reducer;
