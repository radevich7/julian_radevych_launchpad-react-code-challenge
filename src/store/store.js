import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./postsSlice";
import universitiesSlice from "./universitiesSlice";

const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    universities: universitiesSlice.reducer,
  },
});
export default store;
