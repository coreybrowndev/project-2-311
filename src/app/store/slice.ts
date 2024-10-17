import { createSlice } from "@reduxjs/toolkit";

export interface Card {
  id: number;
  question: string;
  answer: string;
  difficulty: number;
  lastReviewed: string;
  nextReview: string;
  correctStreak: number;
  incorrectStreak: number;
  knownLevel: number;
  understandingPercentage: string;
}

interface CardState {
  flashcards: Card[];
}

const initialState: CardState = {
  flashcards: [],
};

export const cardSlice = createSlice({
  name: "flashcards",
  initialState,
  reducers: {
    setFlashcards: (state, action) => {
      state.flashcards = action.payload;
    },
    updateFlashcard: (state, action) => {
      const { id, understandingPercentage, nextReview } = action.payload;
      const flashcard = state.flashcards.find((card: Card) => card.id === id);
      if (flashcard) {
        flashcard.understandingPercentage = understandingPercentage;
        flashcard.nextReview = nextReview;
      }
    },
  },
});

export const { setFlashcards, updateFlashcard } = cardSlice.actions;

export default cardSlice.reducer;
