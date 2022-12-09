import { configureStore } from "@reduxjs/toolkit";
import { authReducer, messageReducer, postReducer } from "./reducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    message: messageReducer,
  },
});

export default store;
