"use client";
import { useSelector } from "react-redux";
import Flashcard from "../flashcard/Flashcard";
import { RootState } from "@/app/store/store";
import CardLoader from "../card-loader/CardLoader";

const Flashcards = () => {
  const flashcards = useSelector((state: RootState) => state.flashcards.flashcards);

  return (
    <div>
      <CardLoader />
      {flashcards.length > 0 ? flashcards.map((flashcard) => <Flashcard key={flashcard.id} flashcard={flashcard} />) : <p>Loading flashcards...</p>}
    </div>
  );
};

export default Flashcards;
