import { configureStore } from "@reduxjs/toolkit";
import postalSlice from "./postalSlice";
import postsSlice from "./postsSlice";
import universitiesSlice from "./universitiesSlice";

const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    universities: universitiesSlice.reducer,
    postal: postalSlice.reducer,
  },
});
export default store;
