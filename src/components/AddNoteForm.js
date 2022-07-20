import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, FormGroup, Input, Label, TextArea } from './ui/Forms';
import Button from './ui/Button';
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

function AddNoteForm() {
  const [state, setState] = useState({ title: '', note: '' });
  const [isSuccess, setIsSuccess] = useState(undefined);
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setState({ ...state, title: e.target.value });
  };
  const handleNoteChange = (e) => {
    setState({ ...state, note: e.target.value });
  };

  const handleSubmit = (e) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
    };

    async function addData() {
      const response = await fetch('http://localhost:3001/api/note', options);
      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        setIsSuccess(false);
      }
    }
    addData();
    e.preventDefault();
  };

  const { title, note } = state;

  return (
    <>
      <InfoWrapper status={isSuccess} />
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

InfoWrapper.propTypes = {
  status: PropTypes.bool.isRequired
};
