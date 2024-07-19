import { gql } from "@apollo/client";

// USER QUERIES

export const GET_USERS = gql`
  query {
    getUsers {
      username
    }
  }
`;
