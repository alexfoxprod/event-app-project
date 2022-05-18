import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginPage from "./pages/manager/login";
import RecoveryPage from "./pages/manager/passwordRecovery";
import Profile from "./pages/user/profile";
import MembersPage from "./pages/manager/membersManagement";

import "./App.css";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/recovery" element={<RecoveryPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/members" element={<MembersPage />} />

      </Routes>
    </>
  );
}

export default App;
