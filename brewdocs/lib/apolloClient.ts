// /lib/apolloClient.ts
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql", // Replace with your Apollo Server URI
  cache: new InMemoryCache(),
});

export default client;
