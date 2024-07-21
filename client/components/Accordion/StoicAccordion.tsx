"use client";

import React, { useState } from "react";
import accordionData from "../../public/static/poetData.json";
import StoicAccordionItem from "./StoicAccordionItem";
import { Merriweather } from "next/font/google";

const merriWeather = Merriweather({ weight: "400", subsets: ["latin"] });

const StoicAccordion = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    console.log("work");
    setOpen((prevOpen) => (prevOpen === index ? null : index));
  };

  return (
    <div
      id="accordion"
      className="mx-auto mt-12 max-w-7xl scroll-m-0  rounded-3xl "
    >
      <div
        className={`font-extrabold  text-3xl md:text-6xl text-center p-4 mb-3 text-blue-500 ${merriWeather.className}`}
      >
        Biographies
      </div>
      {accordionData.data.map((item, index) => (
        <StoicAccordionItem
          key={index}
          poetName={item.poetName}
          biography={item.biography}
          isOpen={index === open}
          toggle={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default StoicAccordion;
