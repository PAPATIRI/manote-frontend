import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddNoteForm from '../components/AddNoteForm';
import Container from '../components/ui/Container';
import { HomeLink, Title } from '../components/ui/HomeLink';
import PageLayout from '../layouts/PageLayout';

export default function Add() {
  return (
    <PageLayout>
      <Container>
        <HomeLink>
          <Title>
            <Link to="/">
              <ArrowBackIcon />
              &nbsp; Back
            </Link>
          </Title>
        </HomeLink>
        <AddNoteForm />
      </Container>
    </PageLayout>
  );
}
