import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoctorLogin from "./pages/doctorlogin/DoctorLogin.js";
import DoctorMenu from "./pages/doctormenu/DoctorMenu.js";
import DoctorSearch from "./pages/doctormenu/DoctorSearch.js";
import DoctorDisplay from "./pages/doctormenu/DoctorDisplay.js";
import DoctorViewPatient from "./pages/doctormenu/DoctorViewPatient.js";
import Home from "./pages/home/Home.js";
import PatientDetails from "./pages/patient/PatientDetails.js";
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
          <Route path="/doctor/menu/search" element={<DoctorSearch />} />
          <Route path="/doctor/menu/display" element={<DoctorDisplay />} />
          <Route path="/doctor/view" element={<DoctorViewPatient />} />
          <Route path="/patient/login" element={<PatientLogin />} />
          <Route path="/patient/signup" element={<PatientSignup />} />
          <Route path="/patient/details" element={<PatientDetails />} />
        </Routes>
      </Router>
    </div>
  );
}
