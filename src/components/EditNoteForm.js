import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from './ui/Button';
import { Form, Input, FormGroup, Label, TextArea } from './ui/Forms';
import Message from './ui/Message';

function InfoWrapper(props) {
  const { status } = props;

  if (status !== null) {
    if (status === false) {
      return <Message type="error" text="Title dan Note harus diisi!" />;
    }
    return <Message type="success" text="Data berhasil disimpan" />;
  }
}

function EditNoteForm() {
  const location = useLocation(); // get url dari page saat ini
  // state for handler
  const [currentNote, setCurrentNote] = useState({ title: '', note: '' });
  const [isSuccess, setIsSuccess] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const noteId = location.pathname.replace('/edit/', '');

    async function fetchData() {
      const response = await fetch(`http://localhost:3001/api/note/${noteId}`);
      const data = await response.json();
      setCurrentNote(data);
    }
    fetchData();
  }, []);

  // input text handler
  const handleTitleChange = (e) => {
    setCurrentNote({ ...currentNote, title: e.target.value });
  };
  const handleNoteChange = (e) => {
    setCurrentNote({ ...currentNote, note: e.target.value });
  };

  // submit handler
  const handleSubmit = (e) => {
    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(currentNote)
    };

    async function submitData() {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/note/${currentNote._id}`, options);
      if (response.ok) {
        setIsSuccess(true);
      }
    }

    submitData();
    e.preventDefault();
  };

  // handle delete note
  const handleDeleteNote = () => {
    const options = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    };
    async function deleteData() {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/note/${currentNote._id}`, options);
      if (response.ok) {
        navigate('/');
      }
    }

    deleteData();
  };

  const { title, note } = currentNote;

  return (
    <>
      <InfoWrapper status={isSuccess} />
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
          <Button danger onClick={handleDeleteNote}>
            Delete
          </Button>
        </FormGroup>
      </Form>
    </>
  );
}

export default EditNoteForm;

InfoWrapper.propTypes = {
  status: PropTypes.node.isRequired
};
