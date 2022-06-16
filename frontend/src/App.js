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
import PatientViewDetails from "./pages/patient/PatientViewDetails.js";
import DoctorAddDiagnosis from "./pages/doctormenu/DoctorAddDiagnosis.js";
import DoctorViewDiagnosis from "./pages/doctormenu/DoctorViewDiagnosis.js";

export default function App() {
  return (
    <div className="App">
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/doctor/login" element={<DoctorLogin />} />
          <Route path="/doctor/menu" element={<DoctorMenu />} />
          <Route path="/doctor/search-patient" element={<DoctorSearch />} />
          <Route path="/doctor/display-patient" element={<DoctorDisplay />} />
          <Route path="/doctor/view/:id" element={<DoctorViewPatient />} />
          <Route path="/doctor/view-diagnosis/:id" element={<DoctorViewDiagnosis />} />
          <Route path="/doctor/add-diagnosis/:id" element={<DoctorAddDiagnosis />} />


          <Route path="/patient/login" element={<PatientLogin />} />
          <Route path="/patient/signup" element={<PatientSignup />} />
          <Route path="/patient/details" element={<PatientDetails />} />
          <Route path="/patient/view-diagnosis/:id" element={<PatientViewDetails />} />
        </Routes>
      </Router>
    </div>
  );
}
