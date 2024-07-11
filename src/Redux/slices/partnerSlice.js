import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '',
  businessName: '',
  websiteName: '',
  serviceType: '',
  employeeNumber: '',
  location: ''
};

const partnerSlice = createSlice({
  name: 'partner',// state identifier 
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
    }
  }
});

export const {
  setUserId,
  setBusinessName,
  setWebsiteName,
  setServiceType,
  setEmployeeNumber,
  setLocation
} = partnerSlice.actions;

export default partnerSlice.reducer;
