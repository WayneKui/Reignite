import React from "react";
import "./SummaryCards.css";
import { FaUsers, FaPoll, FaCalendarCheck, FaDollarSign } from "react-icons/fa";

function SummaryCards() {
  const summaryData = [
    { title: "Total Users", value: "1,250", icon: <FaUsers className="icon users" /> },
    { title: "Total Votes", value: "5,300", icon: <FaPoll className="icon votes" /> },
    { title: "Ongoing Activities", value: "12", icon: <FaCalendarCheck className="icon activities" /> },
    { title: "Revenue", value: "$25,000", icon: <FaDollarSign className="icon revenue" /> },
  ];

  return (
    <div className="summary-cards">
      {summaryData.map((item, index) => (
        <div className="summary-card" key={index}>
          <div className="card-icon">{item.icon}</div>
          <div className="card-content">
            <h3>{item.value}</h3>
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;