import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNotes, fetchNotes } from '../features/notes/noteSlice';

const NotesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 30vw;
  text-align: left;
  margin: 1rem;
  padding: 1rem;
  border: 2px solid #a0aec0;
  border-radius: 8px;
`;

const List = styled.ul`
  list-style: none;
`;
const ListItem = styled.li`
  margin: 0.5rem;
`;

const Separator = styled.hr`
  width: 90%;
  margin: -1px;
  background-color: #edf2f7;
  color: #edf2f7;
`;

function NotesList() {
  const dispatch = useDispatch();
  const notes = useSelector(getAllNotes);
  const notesStatus = useSelector((state) => state.notes.status);
  const error = useSelector((state) => state.notes.error);

  useEffect(() => {
    if (notesStatus === 'idle') {
      dispatch(fetchNotes());
    }
  }, [notesStatus, dispatch]);

  let content;

  if (notesStatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (notesStatus === 'succeeded') {
    content = (
      <List>
        {notes.map((note) => (
          <ListItem key={note._id}>
            <h4>
              <Link to={`/edit/${note._id}`}>{note.title}</Link>
            </h4>
            <p>{note.note.slice(0, 101)}</p>
            <Separator />
          </ListItem>
        ))}
      </List>
    );
  } else if (notesStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return <NotesListContainer>{content}</NotesListContainer>;
}

export default NotesList;
