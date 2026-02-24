import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center gap-6">
      
      <h1 className="text-4xl font-bold">
        Welcome to Meetify
      </h1>

      <p className="text-muted-foreground">
        Your modern video conferencing platform
      </p>

    </main>
  );
}