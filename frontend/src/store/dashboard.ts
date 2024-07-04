import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./configureStore";
import { apiCallBegan } from "./api";

export const slice = createSlice({
  name: "dashboard",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    statusRequested: (status, action) => {
      status.loading = true;
    },

    statusRequestFailed: (status, action) => {
      status.loading = false;
    },

    statusReceived: (status, action) => {
      status.list = action.payload;
      status.lastFetch = Date.now();
      status.loading = false;
    },

    statusUpdated: (status, action) => {
      status.list === action.payload
        ? status.list
        : (status.list = action.payload);
    },
  },
});

const { statusRequested, statusReceived, statusRequestFailed, statusUpdated } =
  slice.actions;
export const dashboardReducer = slice.reducer;

// Action Creators
const url: string = "/status-bar/1";

export const loadStatus = () =>
  apiCallBegan({
    url,
    onStart: statusRequested.type,
    onSuccess: statusReceived.type,
    onError: statusRequestFailed.type,
    onUpdate: statusUpdated.type,
  });

// Selectors
export const getStatus = (state: RootState) => state.entities.dashboard.list;
