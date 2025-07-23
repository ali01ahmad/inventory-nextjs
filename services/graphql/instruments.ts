import { gql } from '@apollo/client';

export const GET_INSTRUMENTS = gql`
  query GetInstruments {
    instruments {
      id
      name
      type
      quantity
      status
      placements
    }
  }
`;

export const ADD_INSTRUMENT = gql`
  mutation CreateInstrument(
    $name: String!
    $type: String!
    $quantity: Int!
    $status: String!
    $placements: String!
  ) {
    createInstrument(
      name: $name
      type: $type
      quantity: $quantity
      status: $status
      placements: $placements
    ) {
      id
      name
      type
      quantity
      status
      placements
    }
  }
`;
