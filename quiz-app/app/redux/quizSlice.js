// redux/quizSlice.js
import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    questions: [],
    currentQuestionIndex: 0,
    answers: {},
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
    setAnswer: (state, action) => {
      state.answers[action.payload.questionIndex] = action.payload.answer;
    },
    nextQuestion: (state) => {
      state.currentQuestionIndex += 1;
    },
    resetQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.answers = {};
    },
  },
});

export const {
  addQuestion,
  removeQuestion,
  updateQuestion,
  setAnswer,
  nextQuestion,
  resetQuiz,
} = quizSlice.actions;
export default quizSlice.reducer;
