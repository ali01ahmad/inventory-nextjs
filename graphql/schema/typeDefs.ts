import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    role: String!
  }

  type Assignment {
    id: Int!
    userId: Int!
    instrumentId: Int!
    startDate: String!
    endDate: String!
    status: String!
  }

  type Instrument {
    id: Int!
    name: String!
    type: String!
    quantity: Int!
    status: String!
    placements: String!
    assignments: [Assignment!]!
  }

  type Shipment {
    id: Int!
    name: String!
    status: String!
    notes: String
    createdAt: String!
  }

  type Item {
    id: Int!
    name: String!
    quantity: Int!
    shipmentId: Int!
  }

  type Query {
    users: [User]
    instruments: [Instrument!]!
    assignments: [Assignment!]!
    shipments: [Shipment]
    items: [Item]
  }

  type Mutation {
    createUser(name: String!, email: String!, role: String!): User
    createInstrument(name: String!, type: String!, quantity: Int!, status: String!, placements: String!): Instrument
    addShipment(name: String!, status: String!, notes: String): Shipment!
    createAssignment(userId: Int!, instrumentId: Int!, startDate: String!, endDate: String!, status: String!): Assignment!
    addItem(name: String!, quantity: Int!, shipmentId: Int!): Item!
  }
`;
