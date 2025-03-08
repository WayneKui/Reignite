import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./pages/UserContext";
import './App.css'
import LoginInfo from './components/LoginInfo'
import SidebarLayout from "./components/SidebarLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import VotingPage from "./pages/VotingPage";
import Activities from "./pages/Activities";
import BusinessModel from "./pages/BusinessModel";

function App() {
  return (
    <UserProvider> {/* Provide User Context */}
      <Router>
        <Routes>
          <Route path="/" element={<LoginInfo />} /> {/* Login Page */}

          <Route path="/dashboard" element={<SidebarLayout />}>
            <Route index element={<Dashboard />} /> {/* Default page */}
            <Route path="voting" element={<VotingPage />} />
            <Route path="activities" element={<Activities />} />
            <Route path="business-model" element={<BusinessModel />} />
          </Route>

          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App

