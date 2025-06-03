import { createSlice } from "@reduxjs/toolkit";
import api from '../../api';

export const goalSlice = createSlice({
  name: "goal",
  initialState: {
    value: [],
  },
  reducers: {
    addGoal: (state, action) => {
      state.value.push(action.payload);
      api.post('goals', action.payload).catch(() => {});
    },
    removeGoal: (state, action) => {
      state.value = state.value.filter((goal) => goal._id !== action.payload);
      api.delete(`goals/${action.payload}`).catch(() => {});
    },
    updateGoal: (state, action) => {
      const index = state.value.findIndex((goal) => goal._id === action.payload._id);
      if (index !== -1) {
        state.value[index] = { ...state.value[index], ...action.payload };
      }
    },
    initData: (state, action) => {
      state.value = action.payload || [];
    },
  },
});

export const { addGoal, removeGoal, updateGoal, initData } = goalSlice.actions;
export default goalSlice.reducer;
