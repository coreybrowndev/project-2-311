"use client";
import { Card } from "@/app/store/slice";
import { useRouter } from "next/navigation";

interface FlashcardProps {
  flashcard: Card;
}

const Flashcard = ({ flashcard }: FlashcardProps) => {
  const router = useRouter();

  return (
    <div
      className="border border-slate-200 p-4 min-h-[300px] rounded-lg flex flex-col border border-blue-300 items-center justify-center text-center cursor-pointer"
      onClick={() => router.push(`/cards/${flashcard.id.toString()}`)}
    >
      <h3 className="text-xl">{flashcard.question}</h3>
      <p className="text-lg">Understanding: {flashcard.understandingPercentage}%</p>
    </div>
  );
};

export default Flashcard;
