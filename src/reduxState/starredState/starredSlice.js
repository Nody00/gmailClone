import { createSlice } from "@reduxjs/toolkit";

export const starredSlice = createSlice({
  name: "starred",
  initialState: {
    starredArr: [],
  },
  reducers: {
    addToStarred: (state, action) => {
      // Check if item in store
      const existingItem = state.starredArr.find(
        (element) => element.id === action.payload.id
      );

      if (!existingItem) {
        // ITEM DOESNT EXIST ADD IT TO ARRAY

        state.starredArr.push(action.payload);
        return;
      }
    },
    removeFromStarred: (state, action) => {
      console.log(action.payload);
      // Find existing item index
      const index = state.starredArr.findIndex(
        (element) => element.id === action.payload
      );

      state.starredArr.splice(index, 1);
    },
  },
});

export const { addToStarred, removeFromStarred } = starredSlice.actions;

export default starredSlice.reducer;
