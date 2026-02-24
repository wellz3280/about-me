import './styles/global.css';
import './styles/theme.css';

import Container from './components/Container'
import Heading from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {

  return (
    <Container>
      <Heading />
      <Main />
      <Footer />
    </Container>
  );
}

export default App
