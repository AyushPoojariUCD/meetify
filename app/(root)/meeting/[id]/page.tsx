"use client";

import { useParams } from "next/navigation";


const Meeting = () => {
  
  const params = useParams();
  
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center gap-6">
      <h1>
        Meeting ID: {params.id}
      </h1>
    </main>
  );
}

export default Meeting;