import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./VotingPage.css"; // 引入 CSS

function VotingPage() {
  const [selectedVote, setSelectedVote] = useState(null);
  const navigate = useNavigate();

  const votingItems = [
    { name: "TMC Recommendation", id: "#c3779", author: "0xb4c0...6f13", votes: "4 votes", time: "6s ago", status: "approved" },
    { name: "Arbitrum Audit Program", id: "#ebbca", author: "0xb4c0...6f13", votes: "3.4k votes", time: "8d ago", status: "approved" },
    { name: "[CONSTITUTIONAL] AIP: ArbOS Version 40 Callisto", id: "#7cc26", author: "0xb4c0...6f13", votes: "3.3k votes", time: "8d ago", status: "approved" },
    { name: "Arbitrum Growth Circles Event Proposal", id: "#ab1a7", author: "Frisson", votes: "4.4k votes", time: "15d ago", status: "rejected" },
    { name: "Request to Increase the Stylus Sprint Committee's Budget", id: "#45513", author: "0xb4c0...6f13", votes: "4.1k votes", time: "22d ago", status: "approved" },
  ];

  useEffect(() => {
    document.body.classList.add("voting-page");
    return () => {
      document.body.classList.remove("voting-page");
    };
  }, []);

  const handleVoteClick = (item) => {
    setSelectedVote(item);
  };

  const handleConfirm = () => {
    navigate("/proposal");
  };

  return (
    <div className="voting-container">
      <h1 className="voting-title">Voting Page</h1>
      <div className="voting-list">
        {votingItems.map((item, index) => (
          <div
            key={index}
            className={`vote-box ${selectedVote?.name === item.name ? "selected" : ""}`}
            onClick={() => handleVoteClick(item)}
          >
            <div className="vote-header">
              {item.status === "approved" ? "✔" : "❌"}
              <span className="vote-title">{item.name}</span>
            </div>
            <p className="vote-info">{item.id} by {item.author} • {item.votes} • {item.time}</p>
            <div className="vote-bar">
              <div className={`vote-progress ${item.status}`}></div>
            </div>
          </div>
        ))}
      </div>
      <button className="confirm-button" onClick={handleConfirm}>
        Confirm
      </button>
    </div>
  );
}

export default VotingPage;
