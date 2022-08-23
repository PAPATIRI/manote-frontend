import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  status: 'idle',
  error: null
};

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/notes`);
  const data = await response.json();
  return data;
});

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchNotes.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchNotes.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    },
    [fetchNotes.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
});

// export const { noteAdded } = notesSlice.actions;

export const getAllNotes = (state) => state.notes.data;

export default notesSlice.reducer;
