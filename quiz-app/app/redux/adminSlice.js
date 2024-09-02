// redux/adminSlice.js
import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    questions: [],
  },
  reducers: {
    addQuestion: (state, action) => {
      state.questions.push(action.payload);
    },
    removeQuestion: (state, action) => {
      state.questions = state.questions.filter(
        (_, index) => index !== action.payload
      );
    },
    updateQuestion: (state, action) => {
      const { index, question } = action.payload;
      state.questions[index] = question;
    },
  },
});

export const { addQuestion, removeQuestion, updateQuestion } =
  adminSlice.actions;
export default adminSlice.reducer;
