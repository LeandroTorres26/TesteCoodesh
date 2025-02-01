import { Source_Sans_3 } from "next/font/google";
import React, { useState, useEffect } from "react";
import Header from "@/components/layout/header/Header";
import CallToAction from "@/components/layout/callToAction/CallToAction";
import Carousel from "@/components/layout/carousel/Carousel";
import Intro from "@/components/layout/intro/Intro";
import Filters from "@/components/layout/filters/Filters";
import States from "@/components/layout/states/States";
import Reasons from "@/components/layout/reasons/Reasons";
import Blog from "@/components/layout/blog/Blog";
import JoinUs from "@/components/layout/joinUs/JoinUs";
import Footer from "@/components/layout/footer/Footer";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`${sourceSans.variable} min-h-screen gap-16 font-[family-name:var(--font-source-sans-3)]`}
    >
      <Header />
      <main className="mt-16 flex flex-col items-center overflow-hidden sm:items-start">
        <CallToAction isMobile={isMobile} />
        <Carousel />
        <Intro isMobile={isMobile} />
        <Filters isMobile={isMobile} />
        <States />
        <Reasons />
        <Blog isMobile={isMobile} />
        <JoinUs isMobile={isMobile} />
      </main>
      <Footer />
    </div>
  );
}
