"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const images = ["/home.png", "/home2.png", "/home3.png", "/home4.png", "/home5.png"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section className="bg-[rgb(37,79,26)] min-h-[100vh] grid grid-cols-2">
        <div className="flex justify-center flex-col ml-[7vw] mt-50">
         <div className="text font-sans font-extrabold text-[clamp(32px,8.5vmin,88px)] tracking-[-0.01em]">
          <h1 className="text-[rgb(210,232,35)] text-7xl">Everything you</h1> 
          <h1 className="text-[rgb(210,232,35)] text-7xl">are. In one,</h1> 
           <h1 className="text-[rgb(210,232,35)] text-7xl">simple link in bio.</h1>
           </div>
          <p className="text-[rgb(210,232,35)] font-medium text-lg my-4">
            Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube, and other social media profiles.
          </p>
          <div className="input flex gap-2 mt-4">
          <input type="text" placeholder="link.UP/username" className="bg-white text-black  focus:outline-green-900 flex font-normal max-w-[243px] relative min-w-0 p-[19px] px-[16px] rounded-lg" />
          <button className="rounded-full z-10 bg-[rgb(233,192,233)] font-semibold px-[26px] py-[18px]">Claim Your LinkUP</button>
          </div>
        </div>
        
        <div className="flex items-center justify-center flex-col mr-[5vw] relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[index]}
              src={images[index]}
              alt="home image"
              className="max-h-200 pt-37 absolute"
              initial={{ opacity: 0, rotateY: 90 }} // Starts hidden & rotated
              animate={{ opacity: 1, rotateY: 0 }} // Fades in smoothly
              exit={{ opacity: 0, rotateY: -90 }} // Fades out & rotates
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </div>
       
      </section>

      <section className="bg-[rgb(71,25,25)] min-h-[100vh]"></section>
    </main>
  );
}