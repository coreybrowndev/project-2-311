"use client";

import { setFlashcards } from "@/app/store/slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const CardLoader = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadCards = async () => {
      const response = await fetch("/sample-data/data.json");
      const data = await response.json();
      dispatch(setFlashcards(data.flashcards));
    };

    loadCards();
  }, [dispatch]);

  return null;
};

export default CardLoader;
