import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "../src/pages/Contact.jsx";
import Home from '../src/pages/Contact.jsx';
import Projects from '../src/pages/Projects.jsx';
import Header from '../src/components/Header.jsx';

function App() {
  return (
    <Router>
      <Header />
      <div>
        {
          <Routes>
             
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:id" element={<Projects />} />
          </Routes>
        }; 
      </div>
    </Router>
  );
};

export default App;
