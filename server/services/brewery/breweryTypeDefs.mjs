// Brewery TypeDefs

import { gql } from "apollo-server-express";

export const breweryTypeDefs = gql`
  type Brewery {
    _id: ID!
    name: String!
    location: String
    beerMasters: [BeerMaster]
    assignedEmployees: [User]
    employeeLink: String
  }

  extend type Query {
    getAllBreweriesByUserId(userId: ID!): [Brewery]
    getOneBreweryById(breweryId: ID!): Brewery
  }

  extend type Mutation {
    createBreweryByUserId(
      name: String!
      location: String
      employeeLink: String
      userId: ID!
    ): Brewery
    removeBreweryByUserId(breweryId: ID!, userId: ID!): Brewery
    updateBrewery(breweryId: ID!, name: String, location: String, employeeLink: String): Brewery
  }
`;
