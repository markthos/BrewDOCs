"use client";

import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../../lib/apolloClient";
import Login from "../../lib/login";

export default function LoginPage() {
  return (
    <ApolloProvider client={client}>
      <main className="flex min-h-screen items-center justify-center">
        <div className="relative flex w-1/4 flex-col rounded-xl bg-white/35 bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-t from-stone-300 to-stone-200 bg-clip-border text-white drop-shadow-md">
            <h3 className="block font-sans text-4xl font-semibold leading-snug tracking-normal text-white uppercase antialiased drop-shadow-lg">
              Sign In
            </h3>
          </div>

          <div className="flex flex-col gap-4 p-6">
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="text"
                placeholder="Username"
                className="peer h-full w-full rounded-md border border-stone-400 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-amber-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-amber-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-amber-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-amber-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Username
              </label>
            </div>

            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="password"
                placeholder="Password"
                className="peer h-full w-full rounded-md border border-stone-400 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-amber-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-amber-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-amber-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-amber-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Password
              </label>
            </div>
          </div>

          <div className="p-6 pt-0">
            <Login />
          </div>
        </div>
      </main>
    </ApolloProvider>
  );
}
