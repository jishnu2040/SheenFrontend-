import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Asynchronous thunk action to fetch service types
export const fetchServiceTypes = createAsyncThunk(
  'partner/fetchServiceTypes',
  async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/v1/partner/service-types/');
    return response.data;
  }
);

const initialState = {
  userId: '',
  businessName: '',
  websiteName: '',
  serviceType: [],
  employeeNumber: '',
  location: '',
  serviceCategories: [],
  selectedTeamSize: '', // New state to store selected team size
  status: 'idle',
  error: null,
};

const partnerSlice = createSlice({
  name: 'partner',
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setBusinessName: (state, action) => {
      state.businessName = action.payload;
    },
    setWebsiteName: (state, action) => {
      state.websiteName = action.payload;
    },
    setServiceType: (state, action) => {
      state.serviceType = action.payload;
    },
    setEmployeeNumber: (state, action) => {
      state.employeeNumber = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setSelectedTeamSize: (state, action) => { // New reducer to set selected team size
      state.selectedTeamSize = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchServiceTypes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchServiceTypes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.serviceCategories = action.payload;
      })
      .addCase(fetchServiceTypes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {
  setUserId,
  setBusinessName,
  setWebsiteName,
  setServiceType,
  setEmployeeNumber,
  setLocation,
  setSelectedTeamSize // Export the new action creator
} = partnerSlice.actions;

export default partnerSlice.reducer;
