import Button from './ui/Button';
import { Form, Input, FormGroup, Label, TextArea } from './ui/Forms';

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

export default EditNoteForm;
