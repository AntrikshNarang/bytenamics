import './App.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Intro />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
