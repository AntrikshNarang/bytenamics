import './App.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login-Signup/Login';
import Signup from './components/Login-Signup/Signup';
import Events from './components/Events/Events';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Intro />} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/signup' element={<Signup/>} />
          <Route exact path='/events' element={<Events/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
