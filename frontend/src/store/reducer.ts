import { combineReducers } from "@reduxjs/toolkit";
import entitiesReducer from "./entities";

export default combineReducers({
  entities: entitiesReducer,
});
