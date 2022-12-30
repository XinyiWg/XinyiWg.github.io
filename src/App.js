/** @format */

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Courses from "./components/Courses";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <div>
        <Helmet>
          <title>Xinyi Wang | 王心怡</title>
          <meta
            name="description"
            content="Xinyi Wang, a Computer Science Student at McGill University, Montreal, Quebec"
          />
        </Helmet>
      </div>

      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Courses />
      <Footer />
    </div>
  );
}

export default App;
