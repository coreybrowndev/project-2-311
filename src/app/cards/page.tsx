"use client";
import Flashcards from "@/components/flashcards/Flashcards";
import Container from "@/components/wrapper/Container";

export default function CardsPage() {
  return (
    <Container>
      <main className="flex flex-col gap-8 items-center justify-center">
        <h1 className="text-3xl font-bold">Overview of Cards</h1>
        <Flashcards />
      </main>
    </Container>
  );
}
