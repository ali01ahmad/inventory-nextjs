import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from '../index'; // adjust path as needed


interface Item {
  id: number;
  name: string;
  quantity: number;
  shipmentId: number;
}

const itemAdapter = createEntityAdapter<Item>();

const initialState = itemAdapter.getInitialState();


const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: itemAdapter.setAll,          // Replace all items
    addItem: itemAdapter.addOne,           // Add one item
    addItems: itemAdapter.addMany,         // Add multiple items
    updateItem: itemAdapter.updateOne,     // Update item by id
    removeItem: itemAdapter.removeOne      // Remove by id
  },
});

export const { setItems, addItem, addItems, updateItem, removeItem } = itemSlice.actions;
export const {
  selectAll: selectAllItems,
  selectById: selectItemById,
  selectIds: selectItemIds,
} = itemAdapter.getSelectors((state: RootState) => state.items);

export default itemSlice.reducer;
