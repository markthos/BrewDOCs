"use client";

import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient";
import Link from "next/link";

export default function Home() {
  const Hero = () => {
    return (
      <section className="text-stone-600 h-[50vh] bg-gradient-to-b from-orange-300/50 w-full grid place-content-center">
        <div className="md:w-2/3 mx-auto">
          <div className="rounded-full size-24 bg-orange-300 shadow-xl mx-auto mb-16 grid place-content-center -rotate-12">
            LOGO
          </div>
          <h1 className="font-black text-4xl md:text-6xl mb-8 text-center">
            Ready To Leave The Hassles Of Brewing Behind You?
          </h1>
          <h2 className="font-medium text-xl md:text-2xl text-stone-500 text-center text-balance">
            BrewDocs has the technology to minimize error and drive your business towards the
            future.
          </h2>
        </div>
      </section>
    );
  };

  const CallToAction = () => {
    return (
      <section className="w-full md:w-max flex flex-col gap-4 md:flex-row mb-32 bg-slate-300/45 font-semibold text-gray-600 rounded-lg drop-shadow-lg p-8">
        <Link href="/about">
          <button className="bg-gradient-to-t from-amber-400 to-amber-200 drop-shadow-md transition-all hover:shadow-lg border-0 rounded px-8 py-4 min-w-full">
            Learn More
          </button>
        </Link>
        <Link href="/signup">
          <button className="bg-gradient-to-t from-amber-400 to-amber-200 drop-shadow-md transition-all hover:shadow-lg border-0 rounded px-8 py-4 min-w-full">
            Sign Up
          </button>
        </Link>
      </section>
    );
  };

  const Features = () => {
    return (
      <section className="grid text-center lg:max-w-4xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-center text-stone-600 divide-y-2 md:divide-x-2 md:divide-y-0 divide-gray-700/35">
        <a href="" className="group px-5 py-4" rel="noopener noreferrer">
          <h2 className={`mb-1 text-2xl font-semibold`}>Management </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-75`}>
            Track multiple breweries and their various recipes.
          </p>
        </a>
        <a href="" className="group px-5 py-4" rel="noopener noreferrer">
          <h2 className={`mb-1 text-2xl font-semibold`}>Efficiency </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-75`}>
            Streamline your brewing process and cut out confusion.
          </p>
        </a>
        <a href="" className="group px-5 py-4" rel="noopener noreferrer">
          <h2 className={`mb-1 text-2xl font-semibold`}>Documentation </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-75`}>
            Create a detailed record of your brewing process.
          </p>
        </a>
      </section>
    );
  };

  return (
    <ApolloProvider client={client}>
      <Hero />
      <CallToAction />
      <Features />
    </ApolloProvider>
  );
}
