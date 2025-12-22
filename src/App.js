import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/features" element={<Features />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/faq" element={<FAQ />} /> */}
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/quote" element={<Quote />} />
        <Route path="*" element={<NotFound />} /> Catch-all for 404 */}
      </Routes>
    </Router>
  );
}

export default App;
