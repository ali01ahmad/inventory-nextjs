import {useQuery, useMutation} from '@apollo/client';
import {GET_ITEM, ADD_ITEM} from '../services/graphql/item';

export const useItem = () => {
  const {data, loading, error} = useQuery(GET_ITEM);
  const [addItem] = useMutation(ADD_ITEM);

  const createItem = async (variables: any) => {
    console.log('Creating item with variables:', variables);
    const response = await addItem({variables});
    return response.data?.addItem;
  };
console.log('data from useItem:', data);
  return {
    items: data?.items || [],
    loading,
    error,
    createItem,
  };
};