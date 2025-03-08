import "./Dashboard.css";
import SummaryCards from "../components/SummaryCards";
import Charts from "../components/Charts";
import RecentActivity from "../components/RecentActivity";
import QuickActions from "../components/QuickActions";
import React from "react";

function Dashboard() {
    return (
      <div className="dashboard-container">
        <SummaryCards />
        <Charts />
        <div className="dashboard-bottom">
          <RecentActivity />
          <QuickActions />
        </div>
      </div>
    );
  }

export default Dashboard;