import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Add from './pages/Add';
import Edit from './pages/Edit';
import HomePage from './pages/Home';

const Container = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
