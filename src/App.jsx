
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom'
import './App.css'
import CustomerRegister from "./pages/CustomerRegister";
import CustomerLogin from "./pages/CustomerLogin";
import AdminRegister from "./pages/AdminRegister";
import AdminLogin from "./pages/AdminLogin";
import VerifyEmail from "./pages/VerifyEmail";
import Dashboard from "./pages/Dashboard";
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';

function App() {

  const Protected = ({ children }) => {
    const user = localStorage.getItem("user");
    const parsedUser = user ? JSON.parse(user) : null;

    if (!parsedUser) {
      return <Navigate to="/login/customer" />;
    }

    return children;
  }

  return (
    <Router>
      <Header />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Protected><Dashboard /></Protected>} />
          <Route path="/register/customer" element={<CustomerRegister />} />
          <Route path="/register/admin" element={<AdminRegister />} />
          <Route path="/login/admin" element={<AdminLogin />} />
          <Route path="/login/customer" element={<CustomerLogin />} />
          <Route path="/verify" element={<VerifyEmail />} />
        </Routes>
  </Router>
  )
}

export default App
