import { Card } from "@/app/store/slice";
import React from "react";

interface FlashcardProps {
  flashcard: Card;
}

const Flashcard = ({ flashcard }: FlashcardProps) => {
  return (
    <div className="border border-slate-200 p-4 rounded-lg">
      <h3>{flashcard.question}</h3>
      <p>{flashcard.answer}</p>
      <p>Understanding: {flashcard.understandingPercentage}%</p>
    </div>
  );
};

export default Flashcard;
