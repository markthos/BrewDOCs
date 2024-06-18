import React, { useState, FormEvent } from "react";
import client from "./apolloClient";
import { ApolloProvider } from "@apollo/client";
import { useMutation, gql } from "@apollo/client";

interface LoginResponse {
  username: string;
  _id: string;
}

const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      username
      _id
    }
  }
`;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { error }] = useMutation<{ login: LoginResponse }>(LOGIN);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await login({ variables: { username, password } });
      if (data) {
        console.log("Logged in user:", data.login);
        // Here you can handle the successful login, e.g., redirecting the user or storing user info
      }
    } catch (e) {
      console.error("Error logging in:", e);
    }
  };

  return (
    <ApolloProvider client={client}>
      <form onSubmit={handleLogin}>
        <main className="flex min-h-screen items-center justify-center">
          <div className="relative flex w-1/4 flex-col rounded-xl bg-white/35 bg-clip-border text-gray-700 shadow-md">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mb-2 p-2 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-2 p-2 rounded"
            />
            <button
              className="block w-full select-none rounded-lg bg-gradient-to-t from-amber-400 to-amber-200 py-3 px-6 text-center align-middle font-sans text-s font-bold uppercase text-stone-600 shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
              data-ripple-light="true"
            >
              Sign In
            </button>
            {error && <p>{error.message}</p>}
          </div>
        </main>
      </form>
    </ApolloProvider>
  );
}

export default Login;
