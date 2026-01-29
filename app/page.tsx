import Image from "next/image";
import { Categoris, Hero, Plan, W3sec, Testimonials, Contact } from "@/components";

export default function Home() {
  return (
      <main className="overflow-hidden">
        <div id="hero"><Hero /></div>
        <div id="categoris"><Categoris /></div>
        <div id="features"><W3sec /></div>
        <div id="plan"><Plan /></div>
        <div id="testimonials"><Testimonials /></div>
        <div id="contact"><Contact /></div>
      </main>
  );
}
