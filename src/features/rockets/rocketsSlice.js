import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v4/rockets';
const initialState = {
  rockets: [],
  isLoading: true,
  error: '',
};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async (thunkAPI) => {
  try {
    const response = await axios.get(URL);
    if (response.status !== 200) {
      throw new Error('Oooops, something went wrong. Failed to get rockets');
    }
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue('Oooops, something went wrong');
  }
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveAction: (state, action) => {
      const id = action.payload;
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id !== id) return rocket;
        const value = (rocket.reserved !== undefined) ? !(rocket.reserved) : true;
        return { ...rocket, reserved: value };
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        const data = action.payload.map((item) => ({
          id: item.id,
          name: item.name,
          type: item.type,
          flickr_images: item.flickr_images[0],
          description: item.description,
          reserved: false,
        }));
        state.rockets = data;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.rockets = [];
        state.error = action.payload;
      });
  },
});

export const getAllRockets = (state) => state.rockets;
export const getAllReservedRockets = (state) => state.rockets.rockets.filter(
  (rocket) => rocket.reserved === true,
);
export const { reserveAction } = rocketsSlice.actions;
export default rocketsSlice.reducer;
