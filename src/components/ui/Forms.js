import styled from 'styled-components';

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

export { Form, FormGroup, Label, Input, TextArea };
