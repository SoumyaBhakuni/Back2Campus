import React from "react";
import { FaUser } from "react-icons/fa";

export default function Offers() {
  return (
    <div className="h-screen py-12 bg-[#2f2f2f] flex flex-col items-center">
      <h1 className="text-center text-[#FFCB74] font-bold font-[Poppins] md:text-6xl text-2xl mb-10">
        What we offers
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-36 px-4 md:px-12">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-black p-6 rounded-lg shadow-lg text-white w-80 flex flex-col items-center"
          >
            <FaUser className="text-3xl mb-4 text-white" />
            <h2 className="text-[#FFCB74] font-bold text-lg text-center">
              One to One Interaction
            </h2>
            <p className="text-center text-sm mt-2">
              What We Offer: Designs, illustrations, and graphic elements from
              the world’s best designers. Want more inspiration?
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
