import tw from 'twin.macro';

const Container = tw.div`
m-4 p-2
`;

function Footer() {
  return (
    <Container>
      <p>
        by <a href="https://syaripedia.net">syaripedia</a>&copy; 2022
      </p>
    </Container>
  );
}

export default Footer;
