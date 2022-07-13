import NoteList from '../components/NoteList';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import PageLayout from '../layouts/PageLayout';

export default function HomePage() {
  return (
    <PageLayout>
      <Container>
        <Button>tambah note</Button>
        <NoteList>All Notes</NoteList>
      </Container>
    </PageLayout>
  );
}
