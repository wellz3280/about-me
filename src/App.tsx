import './styles/global.css';
import './styles/theme.css';

import Container from './components/Container'
import Heading from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Container>
        <Heading />
        <Main />
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App
