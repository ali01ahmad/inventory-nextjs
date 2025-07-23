import { useQuery, useMutation } from '@apollo/client';
import { GET_ASSIGNMENTS, ADD_ASSIGNMENT } from '../services/graphql/assignment';

export function useAssignments() {
  const { data, loading } = useQuery(GET_ASSIGNMENTS);
  const [createAssignment] = useMutation(ADD_ASSIGNMENT);

  const addAssignment = async (variables: any) => {
    const response = await createAssignment({ variables });
    return response.data?.createAssignment;
  };

  return {
    assignments: data?.assignments ?? [],
    loading,
    addAssignment,
  };
}
