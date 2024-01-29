"use client";
import Competition from "@/components/Competition/Competition";
import Feedback from "@/components/Feedback/Feedback";
import Footer from "@/components/Footer/Footer";
import Genres from "@/components/Genres/Genres";
import Header from "@/components/Header/Header";
import Productions from "@/components/Productions/Productions";
import Stream from "@/components/Stream/Stream";

export default function Home() {
  return (
    <main className="homepage">
      <Header />
      <Productions />
      <Genres />
      <Competition />
      <Stream />
      <Feedback />
      <Footer />
    </main>
  );
}
