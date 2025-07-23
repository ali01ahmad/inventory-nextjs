import { gql } from '@apollo/client';

export const GET_ASSIGNMENTS = gql`
  query GetAssignments {
    assignments {
      id
      userId
      instrumentId
      startDate
      endDate
      status
    }
  }
`;

export const ADD_ASSIGNMENT = gql`
  mutation CreateAssignment(
    $userId: Int!
    $instrumentId: Int!
    $startDate: String!
    $endDate: String!
    $status: String!
  ) {
    createAssignment(
      userId: $userId
      instrumentId: $instrumentId
      startDate: $startDate
      endDate: $endDate
      status: $status
    ) {
      id
      userId
      instrumentId
      startDate
      endDate
      status
    }
  }
`;
