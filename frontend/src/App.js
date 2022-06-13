
import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoctorLogin from "./pages/doctorlogin/DoctorLogin.js";
import DoctorMenu from "./pages/doctormenu/DoctorMenu.js";
import Home from "./pages/home/Home.js";
import PatientLogin from "./pages/patient/PatientLogin.js";
import PatientSignup from "./pages/patient/PatientSignup.js";


export default function App() {
  return (
    <div className="App">
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor/login" element={<DoctorLogin />} />
          <Route path="/doctor/menu" element={<DoctorMenu />} />
          <Route path="/patient/login" element={<PatientLogin />} />
          <Route path="/patient/signup" element={<PatientSignup />} />
        </Routes>
      </Router>
    </div>
  );
}
