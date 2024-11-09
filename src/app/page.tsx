import Hero from "@/components/hero/Hero";
import NewCard from "@/components/new-card/NewCard";
import Container from "@/components/wrapper/Container";

export default function Home() {
  return (
    <main className="flex flex-col justify-center gap-8">
      <Hero />
      <Container>
        <div className="flex items-center justify-center mb-8">
          <NewCard />
        </div>
      </Container>
    </main>
  );
}
