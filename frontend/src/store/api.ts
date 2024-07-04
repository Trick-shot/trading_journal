import { createAction } from "@reduxjs/toolkit";

interface ApiCallBegan {
  url: string;
  onStart: string;
  onSuccess: string;
  onError: string;
}
export const apiCallBegan = createAction<ApiCallBegan>("api/CallBegan");
export const apiCallSuccess = createAction("api/CallSuccess");
export const apiCallFailed = createAction("api/CallFailed");
