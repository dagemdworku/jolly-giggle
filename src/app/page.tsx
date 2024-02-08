'use client'

import Sticker from "@/components/Sticker";
import React, { useState } from "react";

export default function Home() {
  const [joke, setJoke] = useState("");
  const fallbackJock = "Why don't scientists trust atoms? Because they make up everything!";

  const updateJoke = async () => {
    const url = '/api/joke';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (!data?.candidates?.length ||
        !data.candidates[0] ||
        !data.candidates[0].content ||
        !data.candidates[0].content.parts ||
        !data.candidates[0].content.parts.length ||
        !data.candidates[0].content.parts[0] ||
        !data.candidates[0].content.parts[0].text) {
        throw new Error('Invalid data');
      }
      setJoke(data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error('An error occurred while fetching the joke:', error);
      setJoke(fallbackJock);
    }
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
