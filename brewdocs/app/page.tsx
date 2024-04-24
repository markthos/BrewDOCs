"use client";

import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between leading-relaxed p-24">
      <ApolloProvider client={client}>
        <div className={"md:mr-auto p-1 drop-shadow-xl text-stone-600 max-w-4xl"}>
          <h1 className="font-bold text-6xl pb-7 drop-shadow-lg">
            Ready To Leave The Hassles Of Brewing Behind You?
          </h1>
          <h2 className="font-bold text-4xl text-stone-500 drop-shadow-lg">
            BrewDocs has the technology to minimize error and drive your business towards the
            future.
          </h2>
        </div>

        <div className="flex-row m-4 p-4 bg-slate-300/45 font-semibold text-gray-600 rounded-lg drop-shadow-lg">
          <a>
            <button className="bg-gradient-to-t from-amber-400 to-amber-200 drop-shadow-md transition-all hover:shadow-lg border-0 m-4 p-2 rounded">
              Learn More
            </button>
          </a>
          <a>
            <button className="bg-gradient-to-t from-amber-400 to-amber-200 drop-shadow-md transition-all hover:shadow-lg m-4 border-0 p-2 px-6 rounded">
              Sign Up
            </button>
          </a>
        </div>

        <div className="mb-80 grid text-center lg:max-w-4xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-center text-stone-600 drop-shadow-lg">
          <a
            href=""
            className="group border-r-2 border-gray-700/35 px-5 py-4"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-1 text-2xl font-semibold`}>Management </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-75`}>
              Track multiple breweries and their various recipes.
            </p>
          </a>

          <a
            href=""
            className="group border border-transparent px-5 py-4"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-1 text-2xl font-semibold`}>Efficiency </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-75`}>
              Streamline your brewing process and cut out confusion.
            </p>
          </a>

          <a
            href=""
            className="group border-l-2 px-5 py-4 border-gray-700/35"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-1 text-2xl font-semibold`}>Documentation </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-75`}>
              Create a detailed record of your brewing process.
            </p>
          </a>
        </div>
      </ApolloProvider>
    </main>
  );
}
