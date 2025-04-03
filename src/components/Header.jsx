import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"; // Import styles

const Header = () => {

  // Assuming authentication is stored in localStorage
  const isLoggedIn = localStorage.getItem("user"); 

  const handleLogout = () => {
    debugger
    localStorage.removeItem("user");
    Navigate('/login/customer')
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
            <li><Link to="/register/customer">Customer Register</Link></li>
            <li><Link to="/register/admin">Admin Register</Link></li>
            <li><Link to="/login/customer">Customer Login</Link></li>
            <li><Link to="/login/admin">Admin Login</Link></li>
          </>
        ) : ( 
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><button onClick={handleLogout} className="lohgout-button">Logout</button></li>
          </>
        )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
