import './App.css';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login-Signup/Login';
import Signup from './components/Login-Signup/Signup';
import Events from './components/Events/Events';

import Home from './components/Home/Home';
import Contact from './components/contact/Contact';
import { useState } from 'react';
import About from './components/about/About';

function App() {
  const [token, settoken] = useState(localStorage.getItem(false));
    return (
    <>
      <div className='main-body'>
        <Router>
          <Navbar token={token} settoken={settoken} />
          <Routes>
            <Route exact path='/' element={<Home token={token}/>} />
            <Route exact path='/login' element={<Login settoken={settoken} />} />
            <Route exact path='/signup' element={<Signup settoken={settoken} />} />
            <Route exact path='/events' element={<Events token={token} />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/about' element={<About />} />

          </Routes>
        </Router>


      </div>
    </>
  );
}

export default App;
