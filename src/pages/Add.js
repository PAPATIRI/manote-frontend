import AddNoteForm from '../components/AddNoteForm';
import Container from '../components/ui/Container';
import Title from '../components/ui/Title';
import PageLayout from '../layouts/PageLayout';

export default function Add() {
  return (
    <PageLayout>
      <Container>
        <Title>tambah catatan</Title>
        <AddNoteForm />
      </Container>
    </PageLayout>
  );
}
