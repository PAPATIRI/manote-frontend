import NoteList from '../components/NoteList';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import PageLayout from '../layouts/PageLayout';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <PageLayout>
      <Container>
        <Link to="/add">
          <Button>tambah note</Button>
        </Link>
        <NoteList>All Notes</NoteList>
      </Container>
    </PageLayout>
  );
}
