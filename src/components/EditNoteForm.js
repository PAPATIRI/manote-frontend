import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from './ui/Button';
import { Form, Input, FormGroup, TextArea } from './ui/Forms';
import Message from './ui/Message';
import { deleteNote, getNoteById, statusReset, updateExistingNote } from '../features/notes/noteSlice';

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
  const noteId = location.pathname.replace('/edit/', '');
  const currentNote = useSelector((data) => getNoteById(data, noteId));
  const [state, setState] = useState(currentNote);
  const [isSuccess, setIsSuccess] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // input text handler
  const handleTitleChange = (e) => {
    setState({ ...state, title: e.target.value });
  };
  const handleNoteChange = (e) => {
    setState({ ...state, note: e.target.value });
  };

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const actionResult = await dispatch(updateExistingNote(state));
      const result = unwrapResult(actionResult);
      if (result) {
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('terjadi kesalahan', error);
      setIsSuccess(false);
    } finally {
      dispatch(statusReset());
    }
  };

  // handle delete note
  const handleDeleteNote = async (e) => {
    e.preventDefault();
    try {
      const actionResult = await dispatch(deleteNote(state));
      const result = unwrapResult(actionResult);
      if (result) {
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('terjadi kesalahan: ', error);
      setIsSuccess(false);
    } finally {
      dispatch(statusReset());
      navigate('/');
    }
  };

  const { title, note } = state;

  return (
    <>
      <InfoWrapper status={isSuccess} />
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input type="text" name="title" value={title} onChange={handleTitleChange} placeholder="tambahkan judul..." />
        </FormGroup>
        <FormGroup>
          <TextArea value={note} onChange={handleNoteChange} placeholder="tambahkan catatan..." rows="12" />
        </FormGroup>
        <FormGroup>
          <Button type="submit">
            <SaveIcon />
            &nbsp;Simpan Perubahan
          </Button>
          <Button danger onClick={handleDeleteNote}>
            <DeleteIcon />
            &nbsp;Delete
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
