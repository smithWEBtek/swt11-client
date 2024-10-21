import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainContent from './components/MainContent/MainContent';


function App() {
  return (
    <Router>
      <Header />
      <MainContent />
      <Footer />
    </Router >
  );
}

export default App;
