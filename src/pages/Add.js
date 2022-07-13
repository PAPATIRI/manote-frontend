import { Link } from 'react-router-dom';
import AddNoteForm from '../components/AddNoteForm';
import Container from '../components/ui/Container';
import Title from '../components/ui/Title';
import PageLayout from '../layouts/PageLayout';

export default function Add() {
  return (
    <PageLayout>
      <Container>
        <div>
          <h4>
            <Link to="/">Home</Link>
          </h4>
        </div>
        <Title>tambah catatan</Title>
        <AddNoteForm />
      </Container>
    </PageLayout>
  );
}
