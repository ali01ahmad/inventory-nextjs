import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Assignment {
  id: number;
  userId: number;
  instrumentId: number;
  startDate: string;
  endDate: string;
  status: string;
}

interface AssignmentState {
  items: Assignment[];
}

const initialState: AssignmentState = {
  items: [],
};

const assignmentSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    setAssignments(state, action: PayloadAction<Assignment[]>) {
      state.items = action.payload;
    },
    addAssignment(state, action: PayloadAction<Assignment>) {
      state.items.push(action.payload);
    },
  },
});

export const { setAssignments, addAssignment } = assignmentSlice.actions;
export default assignmentSlice.reducer;
