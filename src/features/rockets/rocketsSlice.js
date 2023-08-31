import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://api.spacexdata.com/v4/rockets';
const initialState = {
  rockets: [],
  isLoading: true,
  error: '',
};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error('Failed to fetch rockets');
    }

    const data = await response.json();
    return data.map((rocket) => ({
      ...rocket,
      reserved: false,
    }));
  } catch (error) {
    throw new Error(`Failed to fetch the data, ${error}`);
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
