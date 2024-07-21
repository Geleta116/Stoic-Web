"use client";
import { useEmailStore } from "@/store/email-store";
import { useErrorStore } from "@/store/error-store";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

interface Props {
  openModal: boolean;
  toggle: () => void;
}

const SubscribeModal = ({ openModal, toggle }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { addEmail } = useEmailStore();
  const [email, setEmail] = useState<string>("");
  const { error } = useErrorStore();

  async function subscribeToEmail(email: string) {
    try {
      await addEmail(email);
      toggle();
      toast.success("Subscribed successfully");
    } catch (error) {
      toast.error((error as Error).message);
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        toggle();
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        toggle();
      }
    };

    if (openModal) {
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
  }, [openModal, toggle]);

  return (
    <div
      className={`${
        openModal ? "flex" : "hidden"
      } fixed inset-0 z-50 justify-center items-center w-screen h-screen dark:bg-black dark:text-white dark:bg-opacity-80 bg-white text-black bg-opacity-70 `}
    >
    
      <div className="fixed inset-0  bg-opacity-90 backdrop-blur-3xl  w-screen h-screen"></div>
     
      <div
        ref={modalRef}
        className="relative p-6 rounded-lg shadow-lg border max-w-sm w-full "
      >
        <p className="text-lg mb-4">Subscribe to get Daily Quote</p>
        <input
          type="email"
          placeholder="Enter your Email Here"
          className="w-full p-2 border rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={() => subscribeToEmail(email)}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition active:bg-gray-500"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscribeModal;
