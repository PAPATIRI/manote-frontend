import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './features/notes/noteSlice';

export default configureStore({
  reducer: {
    notes: notesReducer
  }
});
