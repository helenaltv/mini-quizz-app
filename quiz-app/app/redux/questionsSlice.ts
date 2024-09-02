import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

interface QuestionsState {
  questions: Question[];
}

const initialState: QuestionsState = {
  questions: [],
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<Question>) => {
      state.questions.push(action.payload);
    },
    removeQuestion: (state, action: PayloadAction<number>) => {
      state.questions = state.questions.filter((q) => q.id !== action.payload);
    },
    updateQuestion: (state, action: PayloadAction<Question>) => {
      const index = state.questions.findIndex(
        (q) => q.id === action.payload.id
      );
      if (index !== -1) {
        state.questions[index] = action.payload;
      }
    },
  },
});

export const { addQuestion, removeQuestion, updateQuestion } =
  questionsSlice.actions;
export default questionsSlice.reducer;
