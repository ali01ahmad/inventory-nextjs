import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Instrument {
  id: number;
  name: string;
  type: string;
  quantity: number;
  status: string;
  placements: string;
}

interface InstrumentState {
  items: Instrument[];
}

const initialState: InstrumentState = {
  items: [],
};

const instrumentSlice = createSlice({
  name: 'instruments',
  initialState,
  reducers: {
    setInstruments(state, action: PayloadAction<Instrument[]>) {
      state.items = action.payload;
    },
    addInstrument(state, action: PayloadAction<Instrument>) {
      state.items.push(action.payload);
    },
  },
});

export const { setInstruments, addInstrument } = instrumentSlice.actions;
export default instrumentSlice.reducer;
