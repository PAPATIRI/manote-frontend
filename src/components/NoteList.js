import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
// import getLocalStorageData from '../utils/getLocalStorageData';

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
  const [notes, setNotes] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/notes', {
        method: 'GET',
        headers: {
          accept: 'application/json'
        }
      });

      const data = await response.json();
      setNotes(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const listItems =
    notes &&
    notes.map((note) => (
      <ListItem key={note._id}>
        <h4>
          <Link to={`/edit/${note._id}`}>{note.title}</Link>
        </h4>
        <p>{note.note.slice(0, 101)}</p>
        <Separator />
      </ListItem>
    ));

  return (
    <NotesListContainer>
      <List>{listItems}</List>
    </NotesListContainer>
  );
}

export default NotesList;
