"use client";
import React, { useState, useEffect, useRef } from "react";
import {  Merriweather } from "next/font/google";
import { useTheme } from "next-themes";
import { ModeToggle } from "../Theme/ThemeButton";
import { FaPlus } from "react-icons/fa6";
import SubscribeModal from "../Modal/SubscribeModal";


const merriWeather = Merriweather({ weight: "400", subsets: ["latin"] });

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["quote", "history", "biographies", "exercises"];
      for (const section of sections) {
        const sectionElement = document.getElementById(section);
        if (
          sectionElement &&
          window.scrollY >= sectionElement.offsetTop - 100 &&
          window.scrollY <
            sectionElement.offsetTop + sectionElement.clientHeight - 100
        ) {
          setActiveLink(section.charAt(0).toUpperCase() + section.slice(1));
          return;
        }
      }
      setActiveLink("");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscKey);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [mobileMenuOpen]);

  const handleClick = (link: string) => {
    setActiveLink(link);
    const element = document.getElementById(link.toLowerCase());
    const navbarHeight = 80;
    const elementPosition = element?.offsetTop ?? 0;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setMobileMenuOpen(false);
  };

  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    console.log("clicked for modal");
    setOpenModal(!openModal);
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const linkClass = (link: string) =>
    `cursor-pointer p-2 z-10 ${
      activeLink === link
        ? "border-b-2 border-blue-500"
        : "border-b-2 border-transparent"
    } hover:border-blue-500`;

  return (
    <div
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 ${
        mobileMenuOpen ? " flex flex-col" : "flex flex-row"
      } justify-around items-center p-4 backdrop-blur-lg font-bold shadow-md`}
    >
      <div className="flex gap-6">
        <div className={`text-3xl ${merriWeather.className}`}>
          Stoic Quotes Daily
        </div>
        <div className="md:hidden">
          <button
            className="text-2xl text-gray-500 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>
        </div>
      </div>
      <div
        className={`${
          mobileMenuOpen ? " flex flex-col" : "hidden"
        } md:flex gap-4 justify-start items-center `}
      >
        <div
          className={linkClass("Quote")}
          onClick={() => handleClick("Quote")}
        >
          Quote
        </div>
        <div
          className={linkClass("History")}
          onClick={() => handleClick("History")}
        >
          History
        </div>
        <div
          className={linkClass("Biographies")}
          onClick={() => handleClick("Biographies")}
        >
          Biographies
        </div>
        <div
          className={linkClass("Exercises")}
          onClick={() => handleClick("Exercises")}
        >
          Exercises
        </div>
        <div className="flex gap-9 justify-around">
          <ModeToggle />
          <button onClick={toggleModal}>
            <FaPlus />
          </button>
        </div>
        <SubscribeModal openModal={openModal} toggle={toggleModal} />
      </div>
    </div>
  );
};

export default NavBar;
