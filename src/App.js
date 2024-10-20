import './styles.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';
import MainCanvas from './components/MainCanvas/MainCanvas';

function App() {
  return (
    <Router>
      <div className="container">
        <AppHeader />
        <MainCanvas />
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
