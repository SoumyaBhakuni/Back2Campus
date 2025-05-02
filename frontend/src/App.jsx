import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Events from './pages/Events';
import Internship from './pages/Internship';
import Alumini from './pages/Alumini';
import Profile from './pages/Profile';
import Techtalks from './pages/Techtalks';
import AddEvents from './pages/AddEvents';
import CreateJobs from './pages/CreateJobs';
import Login from './pages/Login';
import AlumniProfile from './pages/AluminiProfile';
import Chat from './pages/Chat';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/events" element={<Events />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/alumini" element={<Alumini />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/techtalks" element={<Techtalks/>} />
        <Route path='/addevents' element={<AddEvents/>}/> 
        <Route path='/CreateJobs' element={<CreateJobs/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='aluminiProfile/:id'element={<AlumniProfile/>}/>
      </Routes>
    </Router>
  );
}

export default App;