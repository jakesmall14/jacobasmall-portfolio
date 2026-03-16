"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import AIEssay from "@/components/AIEssay";
import Research from "@/components/Research";
import BigIdeas from "@/components/BigIdeas";
import Creative from "@/components/Creative";
import CV from "@/components/CV";
import Footer from "@/components/Footer";

// Client-only components to avoid hydration issues
const Nav         = dynamic(() => import("@/components/Nav"),         { ssr: false });
const Hero        = dynamic(() => import("@/components/Hero"),        { ssr: false });
const StackedName = dynamic(() => import("@/components/StackedName"), { ssr: false });

export default function Home() {
  const [heroComplete, setHeroComplete] = useState(false);

  return (
    <main className="page-fade-in" style={{ backgroundColor: "#E8E2D9", minHeight: "100vh" }}>
      <Nav />
      <StackedName startTyping={heroComplete} />
      <Hero onHeroComplete={() => setHeroComplete(true)} />
      <AIEssay />
      <Research />
      <BigIdeas />
      <Creative />
      <CV />
      <Footer />
    </main>
  );
}
