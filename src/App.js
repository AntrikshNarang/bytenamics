import './App.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login-Signup/Login';
import Signup from './components/Login-Signup/Signup';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Intro />} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/signup' element={<Signup/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
