import { useLocation, useNavigate } from "react-router-dom";
import "./ProposalPage.css";

function ProposalPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get proposal from state or fallback to default
  const proposal = location.state?.proposal || {
    title: "No Proposal Selected",
    content: "Please go back and select a proposal from the Voting Page.",
  };

  return (
    <div className="proposal-page">
      <div className="frame title-box">
        <h1>{proposal.title}</h1>
      </div>

      <div className="frame content-box">
        <p>{proposal.content}</p>
      </div>

      <div className="button-container">
        <button className="pay-button">Individual Pay</button>
        <button className="pay-button group-pay">Group Pay</button>
      </div>

      <button className="back-button" onClick={() => navigate("/dashboard/voting")}>
        Back to Voting
      </button>
    </div>
  );
}

export default ProposalPage;