import React from 'react';
import { SidebarData } from './SidebarData';
import './Dashboard.css'; // Import your CSS for styling

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <nav className="sidebar">
        <ul className="nav-menu">
          {SidebarData.map((item, index) => (
            <li key={index} className="nav-item">
              <a href={item.path} className="nav-link">
                {item.icon}
                <span className="nav-text">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <h1>Welcome to the Dashboard</h1>
        {/* Add your dashboard content here */}
      </div>
    </div>
  );
}

export default Dashboard;