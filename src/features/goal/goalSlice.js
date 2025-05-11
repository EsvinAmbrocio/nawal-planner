import { createSlice } from "@reduxjs/toolkit";

export const goalSlice = createSlice({
  name: "goal",
  initialState: {
    value: [],
  },
  reducers: {
    addGoal: (state, action) => {
      state.value.push(action.payload);
    },
    removeGoal: (state, action) => {
      state.value = state.value.filter((goal) => goal.id !== action.payload);
    },
    updateGoal: (state, action) => {
      const index = state.value.findIndex((goal) => goal.id === action.payload.id);
      if (index !== -1) {
        state.value[index] = { ...state.value[index], ...action.payload };
      }
    },
  },
})

export const { addGoal, removeGoal, updateGoal } = goalSlice.actions;
export default goalSlice.reducer;
