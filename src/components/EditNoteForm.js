import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from './ui/Button';
import { Form, Input, FormGroup, Label, TextArea } from './ui/Forms';

const EditNoteForm = () => {
  const location = useLocation(); //get url dari page saat ini
  //state for handler
  const [allNotes, setAllNotes] = useState(null);
  const [currentNote, setCurrentNote] = useState({ title: '', note: '' });
  //usenavigate to delete data localstorage
  const navigate = useNavigate();

  useEffect(() => {
    const existing = localStorage.getItem('notes');
    const notes = existing ? JSON.parse(existing) : [];

    setAllNotes(notes);

    const noteId = location.pathname.replace('/edit/', '');
    const currentNote = notes.filter((note) => note.id === noteId);

    setCurrentNote(currentNote[0]);
  }, []);

  //input text handler
  const handleTitleChange = (e) => {
    setCurrentNote({ ...currentNote, title: e.target.value });
  };
  const handleNoteChange = (e) => {
    setCurrentNote({ ...currentNote, note: e.target.value });
  };
  //submit handler
  const handleSubmit = (e) => {
    const newNotes = allNotes.map((note) => {
      if (note.id === currentNote.id) {
        return { ...note, title: currentNote.title, note: currentNote.note };
      } else {
        return note;
      }
    });
    localStorage.setItem('notes', JSON.stringify(newNotes));
    e.preventDefault();
  };
  //handle delete note
  const handleDeleteNote = (e) => {
    const newNotes = allNotes.filter((note) => note.id !== currentNote.id);
    setCurrentNote(null);
    setAllNotes(newNotes);

    localStorage.setItem('notes', JSON.stringify(newNotes));
    navigate('/');
  };

  const { title, note } = currentNote;

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Judul:</Label>
          <Input type="text" name="title" value={title} onChange={handleTitleChange} placeholder="tambahkan judul" />
        </FormGroup>
        <FormGroup>
          <Label>Catatan:</Label>
          <TextArea value={note} onChange={handleNoteChange} placeholder="tambahkan catatan" rows="12" />
        </FormGroup>
        <FormGroup>
          <Button type="submit">Simpan Perubahan</Button>
          <Button onClick={handleDeleteNote}>Delete</Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default EditNoteForm;
