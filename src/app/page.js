"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState(false);

  return <main className={theme ? "page dark" : "page light"}></main>;
}
