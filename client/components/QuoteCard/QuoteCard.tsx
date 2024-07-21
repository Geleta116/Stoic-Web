"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Merriweather, Noto_Music } from "next/font/google";
import { useQuoteStore } from "@/store/quote-store";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver"; 
import { AiOutlineDownload } from "react-icons/ai";
import { FaTelegramPlane, FaFacebook, FaInstagram } from "react-icons/fa";
import { toast } from "react-toastify";

const merriweather = Merriweather({ weight: "400", subsets: ["latin"] });
const notoMusic = Noto_Music({ weight: "400", subsets: ["latin"] });


const QuoteCard = () => {
  const { TodaysQuote } = useQuoteStore();
  const [quoteImage, setQuoteImage] = useState<string | null>(null);
  const quoteRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (quoteRef.current && TodaysQuote) {
      html2canvas(quoteRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        setQuoteImage(imgData);
      });
    }
  }, [TodaysQuote]);

  const downloadImage = () => {
    if (quoteImage) {
      saveAs(quoteImage, "quote.png");
    }
  };

  const shareQuote = async () => {
    const shareData = {
      title: "Quote of the Day",
      text: TodaysQuote?.quote,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.info("Link copied to clipboard!");
      }
    } catch (err) {
      toast.error("Sharing failed");
    }
  };

  const shareOnSocial = (platform: string | undefined) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(TodaysQuote?.quote || "");

    let shareUrl;
    switch (platform) {
      case "telegram":
        shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank");
  };

  return (
    <div className="flex flex-col p-4 rounded-lg shadow-2xl w-full">
     
        <div
          ref={quoteRef}
          className="flex flex-col items-center p-4 rounded-lg"
        >
          <div
            className={`text-sm md:text-2xl font-bold text-center mb-4 ${merriweather.className}`}
          >
            {TodaysQuote?.quote}
          </div>
          <div className="flex justify-center items-center gap-2">
            <Image
              src={`/image/${
                TodaysQuote?.author.toLowerCase() || "marcus aurelius"
              }.jpg`}
              alt={`${TodaysQuote?.author}`}
              width={100}
              height={100}
              className="rounded-full"
            />
            <div
              className={`text-center mb-2 text-lg md:text-2xl ${notoMusic.className}`}
            >
              {TodaysQuote?.author}
            </div>
          </div>
        </div>
      
      {quoteImage && (
        <div className="mt-4">
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={downloadImage}
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-900"
            >
              <AiOutlineDownload />
            </button>
            <button
              onClick={() => shareOnSocial("telegram")}
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-900"
            >
              <FaTelegramPlane />
            </button>
            <button
              onClick={() => shareOnSocial("facebook")}
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-900"
            >
              <FaFacebook />
            </button>
            <button
              onClick={shareQuote}
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-900"
            >
              Share
            </button>
          </div>
        </div>
      )}
    </div>
  );
};



export const SplashScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen ">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
      <p className="mt-4 text-blue-500 text-lg">Loading...</p>
    </div>
  );
};

export default QuoteCard;
