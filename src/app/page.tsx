'use client'

import Sticker from "@/components/Sticker";
import React, { useState } from "react";

export default function Home() {
  const [joke, setJoke] = useState("");
  const updateJoke = () => {
    const joke = "Why don't scientists trust atoms? Because they make up everything!";

    setJoke(joke);
  }
  return (
    <div className="flex flex-col min-h-screen justify-between p-24">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Welcome to JollyGiggle, Your Daily Dose of Joy! 😄</h1>
        <p className="mt-2 text-xl">Click the button to reveal today's joke! 🎉</p>
      </header>

      <main className="flex flex-col items-center justify-center">
        {joke && <Sticker text={joke} />}
        <button onClick={updateJoke} className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full font-bold text-xl hover:bg-blue-700 transition-colors duration-300">
          {joke ? 'Another One' : 'Click Me'}
        </button>
      </main>

      <footer className="text-center mt-8">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} JollyGiggle. All rights reserved. 📝</p>
      </footer>
    </div>
  );
}
