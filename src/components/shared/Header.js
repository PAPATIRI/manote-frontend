import tw from 'twin.macro';
import logo from '../../assets/images/logomanote.png';
import Button from '../ui/Button';

const Navigation = tw.div`
flex
justify-between items-center
border-b-2 border-gray-100
py-6
md:justify-start md: space-x-3

`;

const Img = tw.img`
h-14 w-auto sm:h-16
`;

const Heading = tw.h2`
invisible
text-xl font-bold text-gray-900
md:visible

`;

const Menu = tw.div`md:flex items-center justify-end md:flex-1 lg:w-0`;

function Header() {
  return (
    <Navigation>
      <Img src={logo} alt="logo" />
      <Heading>Manote</Heading>
      <Menu>
        <Button>Tambah Note</Button>
      </Menu>
    </Navigation>
  );
}
export default Header;
