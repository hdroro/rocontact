import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";
import Skill from "./components/Skill/Skill";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <>
      <Router>
        <DefaultLayout>
          <Home />
          <About />
          <Skill />
          <Project />
          <Contact />
        </DefaultLayout>
      </Router>
    </>
  );
}

export default App;
