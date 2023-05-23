import "./App.css";
import Home from "./components/home";
import Navigation from "./components/navigation";
import About from "./components/about";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Body = () => {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<Body />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
library.add(fab, fas);
