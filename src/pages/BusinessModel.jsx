import React from "react";
import { MdGroups, MdAccessTime, MdLeaderboard } from "react-icons/md"; // Import icons
import "./BusinessModel.css"; // Import CSS file

function BusinessModel() {
  return (
    <div className="business-model-container">
      <h2 className="business-title">Why Do You Choose Us?</h2>
      <div className="benefits-grid">
        
        {/* Group Voting */}
        <div className="benefit-box">
          <MdGroups className="benefit-icon" />
          <h3>Group Voting: Strength in Numbers</h3>
          <p>✔ Form a voting group and vote collectively.</p>
          <p>✔ Reduce blockchain fees with bundled votes.</p>
          <p>✔ Get rewards for inviting friends.</p>
        </div>

        {/* Early Access Voting */}
        <div className="benefit-box">
          <MdAccessTime className="benefit-icon" />
          <h3>Early Access Voting: Stay Ahead</h3>
          <p>✔ Earn priority access through engagement.</p>
          <p>✔ High REC holders get early voting rights.</p>
          <p>✔ Unlock insights, trends, and strategic advantages.</p>
        </div>

        {/* Gamification & Engagement */}
        <div className="benefit-box">
          <MdLeaderboard className="benefit-icon" />
          <h3>Gamified Experience: Vote & Win</h3>
          <p>✔ Daily check-ins & challenges for rewards.</p>
          <p>✔ Earn badges, tokens, and voting perks.</p>
          <p>✔ Compete in premium challenges for high-value rewards.</p>
        </div>

      </div>
    </div>
  );
}

export default BusinessModel;