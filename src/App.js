import { Container } from 'react-bootstrap';
import './App.css';
import Home from './components/home';
import Navigation from './components/navigation';
import About from './components/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Projects from './components/projects';

function App() {
  return (
    <>
      <Navigation/>
      <Home/>
      <About/>
      <Projects/>
    </>
  );
}

export default App;
library.add(fab, fas);
