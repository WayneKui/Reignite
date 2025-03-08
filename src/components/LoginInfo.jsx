import EnterUsername from "./EnterUsername";
import EnterPassword from "./EnterPassword";
import LoginButton from "./LoginButton";
import logo from "../assets/reignite_logo.png";


function LoginInfo() {
    return (
        <div className="login-container"> {/* This wraps everything */}
            <div className="logo-container">
                <img src={logo} alt="Reignite Logo" />
            </div>
            <div className="login">
                <h1>Login</h1>
                <EnterUsername />
                <EnterPassword />
                <LoginButton />
            </div>
        </div>
    );
}

export default LoginInfo