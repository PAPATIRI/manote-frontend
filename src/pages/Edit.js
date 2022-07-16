import {Link} from 'react-router-dom';
import EditNoteForm from '../components/EditNoteForm';
import Container from '../components/ui/Container';
import Title from '../components/ui/Title';
import PageLayout from '../layouts/PageLayout';



export default function Edit() {
  return (
    <PageLayout>
      <Container>
        <div>
          <h4>
            <Link to="/">Home</Link>
          </h4>
        </div>
        <Title>edit catatan</Title>
        <EditNoteForm />
      </Container>
    </PageLayout>
  );
}
