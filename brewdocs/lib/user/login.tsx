// login logic

import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { data, error }] = useMutation(LOGIN);

  const handleLogin = async () => {
    try {
      const { data } = await login({
        variables: { username, password },
      });
      const token = data?.login?.token;
      if (token) {
        localStorage.setItem("token", token);
        // Redirect the user to the authenticated route
        window.location.href = "/dashboard";
      } else {
        console.error("Login failed: Token not received");
      }
    } catch (error) {
      console.error("Login failed:", (error as Error).message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default Login;
