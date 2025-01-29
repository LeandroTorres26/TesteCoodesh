import { Geist, Geist_Mono } from "next/font/google";

import Header from '@/components/layout/header/Header'
import CallToAction from "@/components/layout/callToAction/CallToAction";
import Carousel from "@/components/layout/carousel/Carousel";
import Intro from "@/components/layout/intro/Intro";
import Filters from "@/components/layout/filters/Filters";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]`}
    >
      <Header/>

      <main className="flex flex-col items-center sm:items-start mt-16">
        <CallToAction/>
        <Carousel/>
        <Intro/>
        <Filters/>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
