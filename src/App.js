import { Container } from 'react-bootstrap';
import './App.css';
import Home from './components/home';
import Navigation from './components/navigation';
import About from './components/about';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navigation/>
      <Home/>
      <About/>
    </>
  );
}

export default App;
