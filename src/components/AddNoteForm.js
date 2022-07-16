import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { Form, FormGroup, Input, Label, TextArea } from './ui/Forms';
import Button from './ui/Button';
import getLocalStorageData from '../utils/getLocalStorageData';
import Message from './ui/Message';

function AddNoteForm() {
  const [state, setState] = useState({ title: '', note: '' });
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setState({ ...state, title: e.target.value });
  };
  const handleNoteChange = (e) => {
    setState({ ...state, note: e.target.value });
  };

  const handleSubmit = (e) => {
    const notes = getLocalStorageData('notes');
    const noteId = uuidv4();

    notes.push({ ...state, id: noteId });

    localStorage.setItem('notes', JSON.stringify(notes));
    setIsSuccess(true);
    setTimeout(() => {
      navigate('/');
    }, 1000);
    e.preventDefault();
  };

  const { title, note } = state;

  return (
    <>
      {isSuccess && <Message text="data berhasil disimpan" />}

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
}

export default AddNoteForm;
