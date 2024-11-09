"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Flashcard from "../flashcard/Flashcard";
import { RootState } from "@/app/store/store";
import CardLoader from "../card-loader/CardLoader";

const Flashcards = () => {
  const flashcards = useSelector((state: RootState) => state.flashcards.flashcards);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= flashcards.length) {
      setCurrentIndex(0);
    }
  }, [flashcards, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <CardLoader />
      {flashcards.length > 0 && <Flashcard flashcard={flashcards[currentIndex]} />}
      <div className="flex gap-4 mt-4">
        <button onClick={handlePrevious} className="bg-gray-500 px-4 py-2 rounded text-white">
          Previous
        </button>
        <button onClick={handleNext} className="bg-gray-500 px-4 py-2 rounded text-white">
          Next
        </button>
      </div>
      <p>
        Card {currentIndex + 1} of {flashcards.length}
      </p>
    </div>
  );
};

export default Flashcards;
