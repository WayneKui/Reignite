import { Outlet, Link, useLocation } from "react-router-dom";
import { FaHome, FaPoll, FaCalendarAlt, FaChartPie } from "react-icons/fa";
import "./Sidebar.css";
import TopBar from "./TopBar";
import logo from "../assets/reignite_logo.png";

function SidebarLayout() {
  const location = useLocation();

  // Set the title dynamically based on the current route
  const pageTitles = {
    "/dashboard": "Dashboard",
    "/dashboard/voting": "Voting Page",
    "/dashboard/activities": "Activities",
    "/dashboard/business-model": "Business Model"
  };
  const currentTitle = pageTitles[location.pathname] || "Page";

  return (
    <div className="layout">
      {/* Sidebar Section */}
      <aside className="sidebar">
        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="Reignite Logo" className="sidebar-logo" />
        </div>

        {/* Navigation Menu */}
        <nav className="menu">
          <ul>
            <li>
              <Link to="/dashboard">
                <FaHome className="menu-icon" />
                <span className="menu-text">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/voting">
                <FaPoll className="menu-icon" />
                <span className="menu-text">Voting Page</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/activities">
                <FaCalendarAlt className="menu-icon" />
                <span className="menu-text">Activities</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/business-model">
                <FaChartPie className="menu-icon" />
                <span className="menu-text">Business Model</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Top Bar Section */}
      <TopBar title={currentTitle} />

      {/* Main Content Section */}
      <main className="main-content">
        <Outlet /> {/* This renders the active page */}
      </main>
    </div>
  );
}

export default SidebarLayout;