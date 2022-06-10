import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoctorLogin from "./pages/doctorlogin/DoctorLogin.js";
import DoctorMenu from "./pages/doctormenu/DoctorMenu.js";
import Home from "./pages/Home.js";
import PatientLogin from "./pages/patient/PatientLogin.js";
import PatientSignup from "./pages/patient/PatientSignup.js";

export default function App() {
  return (
    <div className="App">
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/doctor" element={<DoctorLogin />} />
          <Route path="/login/doctor/menu" element={<DoctorMenu />} />
          <Route path="/login/patient" element={<PatientLogin />} />
          <Route path="/signup/patient" element={<PatientSignup />} />
        </Routes>
      </Router>
    </div>
  );
}
