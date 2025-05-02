import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    let ctx = gsap.context(() => {
      gsap.from(containerRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          scrub:true
        },
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup animation
  }, []);

  return (
    <div className="bg-[#2f2f2f] py-16 h-screen text-white">
      <h2 className="text-4xl font-bold text-center text-yellow-500 mb-10">Testimonials</h2>
      <div ref={containerRef} className="flex justify-evenly gap-10  pt-36 mx-auto px-4">
        {/* Testimonial Card 1 */}
        <div className="text-center">
          <img src="https://via.placeholder.com/100" alt="User 1" className="w-24 h-24 mx-auto rounded-full border-4 border-gray-700" />
          <p className="mt-4 text-sm max-w-xs mx-auto">What We Offer: Ideas, illustrations, and graphic elements from the world’s best designers. Want more inspiration?</p>
        </div>

        {/* Testimonial Card 2 */}
        <div className="text-center">
          <img src="https://via.placeholder.com/100" alt="User 2" className="w-24 h-24 mx-auto rounded-full border-4 border-gray-700" />
          <p className="mt-4 text-sm max-w-xs mx-auto">What We Offer: Ideas, illustrations, and graphic elements from the world’s best designers. Want more inspiration?</p>
        </div>

        {/* Testimonial Card 3 */}
        <div className="text-center">
          <img src="https://via.placeholder.com/100" alt="User 3" className="w-24 h-24 mx-auto rounded-full border-4 border-gray-700" />
          <p className="mt-4 text-sm max-w-xs mx-auto">What We Offer: Ideas, illustrations, and graphic elements from the world’s best designers. Want more inspiration?</p>
        </div>
      </div>
    </div>
  );
}
