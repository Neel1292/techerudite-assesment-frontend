
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom'
import './App.css'
import CustomerRegister from "./pages/CustomerRegister";
import CustomerLogin from "./pages/CustomerLogin";
import AdminRegister from "./pages/AdminRegister";
import AdminLogin from "./pages/AdminLogin";
import VerifyEmail from "./pages/VerifyEmail";
import Dashboard from "./pages/Dashboard";
import Header from './components/Header';

function App() {

  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/register/customer" />} />
          <Route path="/register/customer" element={<CustomerRegister />} />
          <Route path="/register/admin" element={<AdminRegister />} />
          <Route path="/login/admin" element={<AdminLogin />} />
          <Route path="/login/customer" element={<CustomerLogin />} />
          <Route path="/verify" element={<VerifyEmail />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
  </Router>
  )
}

export default App
