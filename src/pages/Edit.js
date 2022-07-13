import styled from 'styled-components';
import PageLayout from '../layouts/PageLayout';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 30vw;
  margin: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

const Label = styled.label`
  text-align: left;
  margin-bottom: 0.5rem;
`;
const Input = styled.input`
  padding: 0.5rem;
`;
const TextArea = styled.textarea`
  padding: 0.5rem;
  resize: none;
`;
const Button = styled.button`
  background: #3182ce;
  color: white;
  font-size: 1em;
  padding: 0.75rem;
  margin-top: 1rem;
  margin-bottom: 0.1rem;
  border: 2px solid white;
  border-radius: 8px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  text-transform: capitalize;
`;

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

const EditNoteForm = () => {
  return (
    <>
      <Form>
        <FormGroup>
          <Label>Judul:</Label>
          <Input type="text" name="title" placeholder="tambahkan judul" />
        </FormGroup>
        <FormGroup>
          <Label>Catatan:</Label>
          <TextArea placeholder="tambahkan catatan" />
        </FormGroup>
        <FormGroup>
          <Button>Simpan Perubahan</Button>
          <Button>Delete</Button>
        </FormGroup>
      </Form>
    </>
  );
};
