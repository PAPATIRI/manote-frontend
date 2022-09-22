import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'twin.macro';
import { getAllNotes, fetchNotes } from '../features/notes/noteSlice';

const NotesListContainer = tw.div`
grid grid-cols-1 md:grid-cols-3 gap-4 my-8
`;

const Card = tw.div`
text-left p-4 border rounded-md
`;

const Title = tw.h4`
text-lg font-semibold text-purple-900
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
    content = notes.map((note) => (
      <Card>
        <Title key={note._id}>
          <Link to={`/edit/${note._id}`}>{note.title}</Link>
        </Title>
        <p>{note.note.slice(0, 101)}</p>
      </Card>
    ));
  } else if (notesStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return <NotesListContainer>{content}</NotesListContainer>;
}

export default NotesList;
