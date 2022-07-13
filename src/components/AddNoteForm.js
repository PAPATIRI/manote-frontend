import { Form, FormGroup, Input, Label, TextArea } from '../components/ui/Forms';
import Button from '../components/ui/Button';

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

export default AddNoteForm;
