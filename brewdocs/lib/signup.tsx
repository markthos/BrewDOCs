// signup logic

import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const SIGNUP = gql`
  mutation Signup($username: String!, $password: String!) {
    signup(username: $username, password: $password) {
      token
    }
  }
`;

const Signup: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signup, { data, error }] = useMutation(SIGNUP);

  const handleSignup = async () => {
    try {
      const { data } = await signup({
        variables: { username, password },
      });
      const token = data?.signup?.token;
      if (token) {
        localStorage.setItem("token", token);
        // Redirect the user to the authenticated route
        window.location.href = "/dashboard";
      } else {
        console.error("Signup failed: Token not received");
      }
    } catch (error) {
      console.error("Signup failed:", (error as Error).message);
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
      <button onClick={handleSignup}>Signup</button>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default Signup;
