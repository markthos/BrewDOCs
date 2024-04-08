"use client";
// /pages/page.tsx
import client from "../../lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { useQuery, gql } from "@apollo/client";

const GET_USERS = gql`
  query {
    getUsers {
      username
    }
  }
`;

function Users() {
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return data.getUsers.map(({ username }: { username: string }) => (
    <div key={username}>
      <p>{username}</p>
    </div>
  ));
}

// use the query to pull from the server and return the usernames of all users for this nextjs page

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between leading-relaxed p-24">
      <ApolloProvider client={client}>
        <div className={"md:mr-auto p-1 drop-shadow-xl text-stone-600 max-w-4xl"}>
          <h1 className="font-bold text-6xl pb-7">Who are our users?</h1>
          <h2 className="font-bold text-4xl text-stone-500">
            <Users />
          </h2>
        </div>

        <div className="flex-row m-4 p-4 bg-slate-300/35 font-semibold text-gray-600 rounded-lg">
          <a>
            <button className="bg-amber-300 hover:bg-amber-200 border-0 m-4 p-2 rounded">
              Learn More
            </button>
          </a>
          <a>
            <button className=" bg-amber-300 hover:bg-amber-200 m-4 border-0 p-2 px-6 rounded">
              Sign Up
            </button>
          </a>
        </div>

        <div className="mb-80 grid text-center lg:max-w-4xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-center text-stone-600">
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
