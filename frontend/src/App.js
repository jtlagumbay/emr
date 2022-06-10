import toast, { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DoctorLogin from './pages/doctor/DoctorLogin.js';
import Home from './pages/Home.js';
import PatientLogin from './pages/patient/PatientLogin.js';

export default function App() {

  return (
    <div className="App">
      <Toaster/>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login/doctor' element={<DoctorLogin/>} />
        <Route path='/login/patient' element={<PatientLogin />} />
      </Routes>
    </Router>
    </div>

  );
}


