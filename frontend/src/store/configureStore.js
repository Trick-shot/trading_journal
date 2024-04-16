import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return configureStore({ reducer });
}
