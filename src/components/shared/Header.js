import styled from 'styled-components';
import logo from '../../assets/images/logomanote.png';

const Container = styled.div`
  margin: 1rem;
  padding: 0.5rem;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

function Header() {
  return (
    <Container>
      <Image src={logo} />
      <h1>Manote app</h1>
    </Container>
  );
};
export default Header;
