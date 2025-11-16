//Import React and routing dependencies
import React from "react";
import { BrowserRouter as Router, Routes, Route , Navigate} from "react-router-dom";

//Import our components
import Login from "./components/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import CreateRequest from "./components/CreateRequest.jsx";
import PendingApprovals from "./components/PendingApproval.jsx";
import PaymentHistory from "./components/PaymentHistory.jsx";
import EmployeeManagement from "./components/EmployeeManagement.jsx";
//Import CSS
import "./index.css";

// Import the Navbar component
import Navbar from "./components/common/Navbar.jsx";

function App() {
  return (
    //Router enables navigation between different pages
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/*Routes defines which component to show for each URL*/}
        <Routes>
          {/* Public route - Login page */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          {/*<Route path="/dashboard" element={<Dashboard />} /> */}
{/* Protected routes - Wrapped with Navbar */}
<Route path="/*" element={<ProtectedRoutes />}/>
        </Routes>
      </div>
    </Router>
  );
}

//Component for routes that require authentication and have Navbar
const ProtectedRoutes = () => {
  //Check if user is logged in (has a role in localStorage)
  const userRole = localStorage.getItem("userRole");

  //If no user role, redirect to login page
  if (!userRole) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      {/*Navbar shown on all protected pages */}
      <Navbar />

      {/* Define the protected routes */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-request" element={<CreateRequest />} />
        <Route path="/pending-approvals" element={<PendingApprovals />} />
        <Route path="/payment-history" element={<PaymentHistory />} />
        <Route path="/employees" element={<EmployeeManagement />} />

        {/* Default route - redirect to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  );
};
export default App;
