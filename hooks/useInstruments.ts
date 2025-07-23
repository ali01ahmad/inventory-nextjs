import { useQuery, useMutation } from '@apollo/client';
import { GET_INSTRUMENTS, ADD_INSTRUMENT } from '../services/graphql/instruments';

export function useInstruments() {
  const { data, loading } = useQuery(GET_INSTRUMENTS);
  const [createInstrument] = useMutation(ADD_INSTRUMENT);

  const addInstrument = async (variables: any) => {
    const response = await createInstrument({ variables });
    return response.data?.createInstrument;
  };

  return {
    instruments: data?.instruments ?? [],
    loading,
    addInstrument,
  };
}
