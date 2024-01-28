"use client";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState(false);

  return <main className="homepage"></main>;
}
