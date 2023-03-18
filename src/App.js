import './App.css';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login-Signup/Login';
import Signup from './components/Login-Signup/Signup';
import Events from './components/Events/Events';

import Home from './components/Home/Home';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <div className='main-body'>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/events' element={<Events />} />
            <Route exact path='/contact' element={<Contact />} />

          </Routes>
        </Router>


      </div>
    </>
  );
}

export default App;
