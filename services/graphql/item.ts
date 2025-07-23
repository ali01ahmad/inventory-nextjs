import { gql } from '@apollo/client';

export const GET_ITEM = gql`
  query GetItem {
    items {
      id
      name
      quantity
      shipmentId
    }
  }
`;

export const ADD_ITEM = gql`
  mutation addItem(
    $name: String!
    $quantity: Int!
    $shipmentId: Int!
  ) {
    addItem(
      name: $name
      quantity: $quantity
      shipmentId: $shipmentId
    ) {
      id
      name
      quantity
      shipmentId
    }
  }
`;
 