// Import React hooks
import React, { useState } from "react";
//Import hook for navigation
import { useNavigate } from "react-router-dom";

const Login = () => {
  //useState hook manages the selected role in component state
  const [role, setRole] = useState("finance");
  //useNavigate hook allows us to redirect user
  const navigate = useNavigate();

  const handleLogin = () => {
    // Store user role in browser's local storage
    localStorage.setItem("userRole", role);
    //Redirect to dashboard
    navigate("/dashbord");
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Salary Payment Manager
        </h1>

        {/**Role selection dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)} // Update state when selection changes
            className="w-full p-2 border rounded"
          >
            <option value="finance">Finance Department</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        {/**Login button */}
        <button
          onClick={handleLogin} // Call handleLogin when clicked
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Enter System
        </button>
      </div>
    </div>
  );
};
export default Login;
