"use client";

import { ApolloProvider } from "@apollo/client";
import client from "../../lib/apolloClient";
import Login from "../../lib/login";

export default function LoginPage() {
  return (
    <ApolloProvider client={client}>
      <hr className="w-1/4 h-0.5 mx-auto my-4 bg-stone-100 border-0 rounded md:my-10 dark:bg-stone-400" />
      <div className="relative flex w-1/4 flex-col rounded-xl bg-white/35 bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-t from-stone-300 to-stone-200 bg-clip-border text-white drop-shadow-md">
          <h3 className="block font-sans text-4xl font-semibold leading-snug tracking-normal text-white uppercase antialiased drop-shadow-lg">
            Log In
          </h3>
        </div>
        <Login />
      </div>
      <hr className="w-1/4 h-0.5 mx-auto my-4 bg-stone-100 border-0 rounded md:my-10 dark:bg-stone-400" />
    </ApolloProvider>
  );
}
