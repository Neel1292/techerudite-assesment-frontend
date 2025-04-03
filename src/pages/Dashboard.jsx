import React, { useEffect, useMemo, useState } from "react";
import DashboardCard from "../components/DashboardCard";
import "../styles/Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const user = useMemo(() => {
    let loggedIn = JSON.parse(localStorage.getItem("user"));
    if (!loggedIn) {
      navigate("/login/customer");
    }

    return loggedIn
  }, [])


  return (
    <>
      {user ? (
        <div className="dashboard-container">
          <DashboardCard
            full_name={user.first_name + " " + user.last_name}
            email={user.email}
            role={user.role}
          />
        </div>
      ) :  (
        <></>
      )}
    </>
  );
}

export default Dashboard;
