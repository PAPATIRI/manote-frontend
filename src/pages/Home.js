import NoteList from '../components/NoteList';
import Container from '../components/ui/Container';
import PageLayout from '../layouts/PageLayout';

export default function HomePage() {
  return (
    <PageLayout>
      <Container>
        <NoteList>All Notes</NoteList>
      </Container>
    </PageLayout>
  );
}
