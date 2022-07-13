import { Form, FormGroup, Input, Label, TextArea } from '../components/ui/Forms';
import Button from '../components/ui/Button';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddNoteForm = () => {
  const [state, setState] = useState({ title: '', note: '' });

  const handleTitleChange = (e) => {
    setState({ ...state, title: e.target.value });
  };
  const handleNoteChange = (e) => {
    setState({ ...state, note: e.target.value });
  };

  const handleSubmit = (e) => {
    let existing = localStorage.getItem('notes');
    existing = existing ? JSON.parse(existing) : [];

    const noteId = uuidv4();
    existing.push({ ...state, id: noteId });

    localStorage.setItem('notes', JSON.stringify(existing));
    e.preventDefault();
  };

  const { title, note } = state;

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Judul</Label>
          <Input type="text" name="title" value={title} onChange={handleTitleChange} placeholder="tambahkan judul" />
        </FormGroup>
        <FormGroup>
          <Label>Catatan</Label>
          <TextArea value={note} onChange={handleNoteChange} placeholder="tambahkan catatan" rows="12" />
        </FormGroup>
        <FormGroup>
          <Button type="submit">Tambah catatan</Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default AddNoteForm;
