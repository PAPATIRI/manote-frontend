import { BrowserRouter, Routes, Route } from 'react-router-dom';
import tw, { GlobalStyles } from 'twin.macro';
import Add from './pages/Add';
import Edit from './pages/Edit';
import HomePage from './pages/Home';

const Container = tw.div`
text-center
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
