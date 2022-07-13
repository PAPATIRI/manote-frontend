import EditNoteForm from '../components/EditNoteForm';
import Container from '../components/ui/Container';
import Title from '../components/ui/Title';
import PageLayout from '../layouts/PageLayout';

export default function Edit() {
  return (
    <PageLayout>
      <Container>
        <Title>edit catatan</Title>
        <EditNoteForm />
      </Container>
    </PageLayout>
  );
}
