import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Character {
    id: ID!
    name: String!
    url: String!
    created: String!
    status: String!
    species: String!
    type: String
    gender: String!
    origin: CharacterLocation
    location: CharacterLocation!
    image: String!
    episode: [String!]!
  }

  type CharacterLocation {
    name: String!
    url: String!
  }

  type Query {
    charactersList: [Character!]!
  }
`;
