import Hero from "@/components/hero/Hero";
import NewCard from "@/components/new-card/NewCard";
import Container from "@/components/wrapper/Container";

export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      <Hero />
      <Container>
        <div className="flex items-center justify-center outline outline-red-300">
          <NewCard />
        </div>
      </Container>
    </main>
  );
}
