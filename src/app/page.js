"use client";
import Competition from "@/components/Competition/Competition";
import Feedback from "@/components/Feedback/Feedback";
import Footer from "@/components/Footer/Footer";
import Genres from "@/components/Genres/Genres";
import Header from "@/components/Header/Header";
import Productions from "@/components/Productions/Productions";
import Stream from "@/components/Stream/Stream";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatchEvent(hideLoading());
  }, [dispatch]);

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
