import { configureStore } from "@reduxjs/toolkit";
import starredSlice from "../reduxState/starredState/starredSlice";
export default configureStore({
  reducer: {
    starred: starredSlice,
  },
});
