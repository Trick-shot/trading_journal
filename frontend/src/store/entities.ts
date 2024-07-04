import { combineReducers } from "@reduxjs/toolkit";
import { dashboardReducer } from "./dashboard";

export default combineReducers({
  dashboard: dashboardReducer,
});
