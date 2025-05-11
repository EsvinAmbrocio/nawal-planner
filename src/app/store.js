import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
import goalReducer from '../features/goal/goalSlice'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    goals: goalReducer
  },
})
