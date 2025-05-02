import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "./Navbar";

export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      { y: -100, opacity: 1, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/hero2 (1).png')" }}>
      <Navbar />

      {/* Centered content with GSAP animation */}
      <div className="flex justify-center h-full items-center">
        <h1 ref={textRef} className="text-center text-2xl md:text-7xl text-white font-[Poppins] leading-relaxed md:leading-[5rem]">
          The future is <br /> in your hand
        </h1>
      </div>
    </div>
  );
}
