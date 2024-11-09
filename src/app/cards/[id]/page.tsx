"use client";
import { useRouter, useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";
import { updateFlashcard } from "@/app/store/slice";

const CardDetailPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const dispatch = useDispatch();

  const flashcard = useSelector((state: RootState) => state.flashcards.flashcards.find((card) => card.id === Number(id)));

  if (!flashcard) return <p>Card not found</p>;

  const handleReview = (difficulty: "easy" | "medium" | "hard") => {
    let newUnderstanding = parseFloat(flashcard.understandingPercentage);
    const newNextReview = new Date(flashcard.nextReview);

    switch (difficulty) {
      case "easy":
        newUnderstanding = Math.min(newUnderstanding + 20, 100);
        newNextReview.setDate(newNextReview.getDate() + 7);
        break;
      case "medium":
        newUnderstanding = Math.min(newUnderstanding + 10, 100);
        newNextReview.setDate(newNextReview.getDate() + 3);
        break;
      case "hard":
        newUnderstanding = Math.min(newUnderstanding + 5, 100);
        newNextReview.setDate(newNextReview.getDate() + 1);
        break;
    }
    dispatch(
      updateFlashcard({
        id: flashcard.id,
        understandingPercentage: newUnderstanding.toFixed(2),
        nextReview: newNextReview.toISOString(),
      })
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold">{flashcard.question}</h2>
      <p className="text-lg mt-4">Answer: {flashcard.answer}</p>
      <p>Understanding Level: {flashcard.understandingPercentage}%</p>
      <p>Next Review: {new Date(flashcard.nextReview).toLocaleDateString()}</p>
      <div className="mt-6 flex gap-4">
        <button onClick={() => handleReview("easy")} className="bg-green-500 px-4 py-2 rounded text-white">
          Easy
        </button>
        <button onClick={() => handleReview("medium")} className="bg-blue-500 px-4 py-2 rounded text-white">
          Medium
        </button>
        <button onClick={() => handleReview("hard")} className="bg-red-500 px-4 py-2 rounded text-white">
          Hard
        </button>
        <button onClick={() => router.back()} className="bg-gray-500 px-4 py-2 rounded text-white">
          Back
        </button>
      </div>
    </div>
  );
};

export default CardDetailPage;
