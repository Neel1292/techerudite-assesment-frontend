import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Header.css"; // Import styles

const Header = () => {
  // Assuming authentication is stored in localStorage
  const isLoggedIn = localStorage.getItem("user"); 

  const navigate = useNavigate();
  const location = useLocation(); 

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate('/login/customer')
  }

  return (
    <nav className="header">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo">Auth Manage.</Link>
        
        {/* Navigation */}
        <ul className="nav-links">
        {!isLoggedIn ? (
          <>
            <li><Link to="/register/customer" className={location.pathname === "/register/customer" ? "active" : ""}>Customer Register</Link></li>
            <li><Link to="/register/admin" className={location.pathname === "/register/admin" ? "active" : ""}>Admin Register</Link></li>
            <li><Link to="/login/customer" className={location.pathname === "/login/customer" ? "active" : ""}>Customer Login</Link></li>
            <li><Link to="/login/admin" className={location.pathname === "/login/admin" ? "active" : ""}>Admin Login</Link></li>
          </>
        ) : ( 
          <>
            <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Dashboard</Link></li>
            <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
          </>
        )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
