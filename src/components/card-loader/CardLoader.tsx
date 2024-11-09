"use client";

import { setFlashcards } from "@/app/store/slice";
import { RootState } from "@/app/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CardLoader = () => {
  const dispatch = useDispatch();
  const flashcards = useSelector((state: RootState) => state.flashcards.flashcards);

  useEffect(() => {
    if (flashcards.length === 0) {
      const loadCards = async () => {
        const response = await fetch("/sample-data/data.json");
        const data = await response.json();
        dispatch(setFlashcards(data.flashcards));
      };

      loadCards();
    }
  }, [dispatch, flashcards]);

  return null;
};

export default CardLoader;
