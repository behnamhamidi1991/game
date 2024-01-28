"use client";
import Genres from "@/components/Genres/Genres";
import Header from "@/components/Header/Header";
import Productions from "@/components/Productions/Productions";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState(false);

  return (
    <main className="homepage">
      <Header />
      <Productions />
      <Genres />
    </main>
  );
}
