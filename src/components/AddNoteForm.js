import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { Form, FormGroup, Input, Label, TextArea } from './ui/Forms';
import Button from './ui/Button';
import Message from './ui/Message';
import { addNewNote, statusReset } from '../features/notes/noteSlice';

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
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setState({ ...state, title: e.target.value });
  };
  const handleNoteChange = (e) => {
    setState({ ...state, note: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const actionResult = await dispatch(addNewNote(state));
      const result = unwrapResult(actionResult);
      console.log('new added note: ', result);

      if (result) {
        setIsSuccess(true);
        navigate('/');
      } else {
        setIsSuccess(false);
      }
    } catch (err) {
      console.error('terjadi kesalahan: ', err);
      setIsSuccess(false);
    } finally {
      dispatch(statusReset());
    }
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
