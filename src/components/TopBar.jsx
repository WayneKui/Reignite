import { useState } from "react";
import { ethers } from "ethers";
import { FaUser, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./TopBar.css";

function TopBar({ title }) {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");

  const handleTransaction = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed. Please install it to continue.");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });

      let transaction;
      if (depositAmount) {
        transaction = await signer.sendTransaction({
          to: "0xYourSmartContractAddress", // Replace with actual contract address
          value: ethers.utils.parseEther(depositAmount),
        });
        console.log("Deposit Transaction:", transaction);
      } else if (withdrawAmount) {
        alert("Withdrawal transactions require a smart contract function.");
        // Call your contract's withdraw function here if implemented
      } else {
        alert("Enter an amount to deposit or withdraw.");
      }
    } catch (error) {
      console.error("Transaction failed:", error);
      alert("Transaction failed. See console for details.");
    }
  };

  return (
    <div className="top-bar">
      {/* Left - Page Title */}
      <h2 className="page-title">{title}</h2>

      {/* Right - Wallet Section */}
      <div className="topbar-controls">
        {/* Inputs & Submit Button */}
        <div className="wallet-inputs-container">
          <div className="wallet-inputs">
            <input
              type="text"
              placeholder="Deposit (ETH)"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              className="wallet-input"
            />
            <input
              type="text"
              placeholder="Withdraw (ETH)"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
              className="wallet-input"
            />
          </div>
          <button className="submit-button" onClick={handleTransaction}>
            Submit
          </button>
        </div>

        {/* Wallet Button + Icons */}
        <div className="wallet-section">
          <button className="wallet-button">Your Wallet</button>
          <div className="icon-group">
            <Link to="/profile">
              <FaUser className="top-icon" />
            </Link>
            <Link to="/settings">
              <FaCog className="top-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
