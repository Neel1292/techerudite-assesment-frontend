import React from 'react'
import "../styles/DashboardCard.css";

function DashboardCard({full_name, email, role}) {
  return (
    <div className='dashboard-card'>
      <h2>{full_name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Role:</strong> {role}</p>
    </div>
  )
}

export default DashboardCard
