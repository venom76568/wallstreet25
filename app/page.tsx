"use client";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
// import Form from '@/components/Form';
import Register from "@/components/Registration";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Timeline />
      {/* <Form /> */}
      <Register />
      <Footer />
    </div>
  );
}
