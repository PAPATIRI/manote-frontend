import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  status: 'idle',
  error: null
};

// get all notes
export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/notes`);
  const data = await response.json();
  return data;
});

// add new note
export const addNewNote = createAsyncThunk('notes/AddNewNote', async (initialNotes) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(initialNotes)
  };

  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/note`, requestOptions);

  if (response.ok) {
    const data = await response.json();
    const noteAdded = { ...initialNotes, _id: data._id };
    return noteAdded;
  }
  return null;
});

// update note
export const updateExistingNote = createAsyncThunk('notes/updateNote', async (currentNote) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(currentNote)
  };

  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/note/${currentNote._id}`, requestOptions);
  if (response.ok) {
    return currentNote;
  }
  return null;
});

// create slice for notelist
const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    statusReset(state) {
      state.status = 'idle';
    }
  },
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
    },
    [addNewNote.pending]: (state) => {
      state.status = 'loading';
    },
    [addNewNote.succeeded]: (state, action) => {
      state.status = 'succeeded';
      state.data.push(action.payload);
    },
    [addNewNote.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [updateExistingNote.pending]: (state) => {
      state.status = 'loading';
    },
    [updateExistingNote.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      const { _id, title, note } = action.payload;
      const existingNote = state.data.find((note) => note._id === _id);
      if (existingNote) {
        existingNote.title = title;
        existingNote.note = note;
      }
    },
    [updateExistingNote.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
});

export const getAllNotes = (state) => state.notes.data;
export const getNoteById = (state, noteId) => state.notes.data.find((note) => note._id === noteId);
export const { statusReset } = notesSlice.actions;

export default notesSlice.reducer;
