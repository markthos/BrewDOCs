import { gql } from "@apollo/client";

// USER MUTATIONS

// export const LOGIN = gql`
//   mutation Login($username: String!, $password: String!) {
//     login(username: $username, password: $password) {
//       token
//     }
//   }
// `;

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      username
      _id
    }
  }
`;

export const SIGNUP = gql`
  mutation signup($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
      username
      _id
    }
  }
`;
