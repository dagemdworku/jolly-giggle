import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-between p-24">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Welcome to JollyGiggle, Your Daily Dose of Joy! 😄</h1>
        <p className="mt-2 text-xl">Click the button to reveal today's joke! 🎉</p>
      </header>

      <main className="flex flex-col items-center justify-center">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={100}
          priority
        />
        <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full font-bold text-xl hover:bg-blue-700 transition-colors duration-300">
          Another One
        </button>
      </main>

      <footer className="text-center mt-8">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} JollyGiggle. All rights reserved. 📝</p>
      </footer>
    </div>

  );
}
