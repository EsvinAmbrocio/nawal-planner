import { createSlice } from "@reduxjs/toolkit";
import api from '../../api';

export const todoSlice = createSlice({
  name: "todo",
  
  initialState: {
    value: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
      api.post('tasks', action.payload).catch(() => {});
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter((todo) => todo._id !== action.payload);
      api.delete(`tasks/${action.payload}`).catch(() => {});
    },
    updateTodo: (state, action) => {
      const index = state.value.findIndex((todo) => todo._id === action.payload._id);
      if (index !== -1) {
        state.value[index] = { ...state.value[index], ...action.payload };
      }
    },
    initData: (state, action) => {
      state.value = action.payload || [];
    },
  }, 
})

export const { addTodo, removeTodo, updateTodo, initData } = todoSlice.actions;

export default todoSlice.reducer;
