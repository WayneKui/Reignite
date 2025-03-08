import { useNavigate } from "react-router-dom";

function LoginButton() {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = () => {
    navigate("/dashboard"); // Redirect to Dashboard page
  };

  return (
    <button className="login-button" onClick={handleLogin}>
      LOGIN
    </button>
  );
}


export default LoginButton;