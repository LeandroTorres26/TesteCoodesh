import { Source_Sans_3 } from "next/font/google";
import React from "react";
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
  return (
    <div
      className={`${sourceSans.variable} min-h-screen gap-16 font-[family-name:var(--font-source-sans-3)]`}
    >
      <Header />
      <main className="mt-16 flex flex-col items-center sm:items-start">
        <CallToAction />
        <Carousel />
        <Intro />
        <Filters />
        <States />
        <Reasons />
        <Blog />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
}
