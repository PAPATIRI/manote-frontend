import styled from 'styled-components';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import { Form, FormGroup, Input, Label, TextArea } from '../components/ui/Forms';
import PageLayout from '../layouts/PageLayout';

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  text-transform: capitalize;
`;

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

const AddNoteForm = () => {
  return (
    <>
      <Form>
        <FormGroup>
          <Label>Judul</Label>
          <Input type="text" name="title" placeholder="tambahkan judul" />
        </FormGroup>
        <FormGroup>
          <Label>Catatan</Label>
          <TextArea placeholder="tambahkan catatan" rows="12" />
        </FormGroup>
        <FormGroup>
          <Button>Tambah catatan</Button>
        </FormGroup>
      </Form>
    </>
  );
};
