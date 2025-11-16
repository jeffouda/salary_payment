// Import REact and necessary hooks
import React from "react";
//Import Link and useLOcation for navigation
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  //useLocation hook gets the current URL path
  const location = useLocation();

  //Get user role from locationStorage
  const userRole = localStorage.getItem("userRole") || "finance";

  // Functio to check if a link is active (current page)
  const isActive = (path) => location.pathname === path;

  // Funtion to handle logout
  const handleLogout = () => {
    localStorage.removeItem("userRole");
    {
      /* navigate("/");*/
    }
   window.location.href = "/"; // Redirect to login page
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/*Left side -Logo and Navigation Links */}
          <div className="flex space-x-8">
            {/*App Logo/Name that link to Dashboard */}
            <Link
              to="/dashboard"
              className="flex item-center text-xl font-bold text-gray-800"
            >
              Salary Manager
            </Link>
            {/*Navigation Links */}
            <div className="hidden md:flex item-center space-x-4">
              {/*Dashboard Link */}
              <Link
                to="/dashboard"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive("/dasboard")
                    ? "bg-blue-100 text-blue-700" // Active style
                    : "text-gray-600 hover:text-gray-900" // Inactive style
                }`}
              >
                Dashboard
              </Link>

              {/*Pending Approvals Link - Only for Admin users */}
              {userRole === "admin" && (
                <Link
                  to="/pending-approvals"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isActive("/pending-approvals")
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Pending Approvals
                </Link>
              )}
              {/*Employee Management LInk -Available for all users */}
              <Link
                to="/payment-history"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive("/payment-history")
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Payment History
              </Link>
              {/*Employee Management Link -Available for all users */}
              <Link
                to="/employees"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive("/employees")
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Employees
              </Link>
            </div>
          </div>

          {/* Right side -User info and LOgout */}
          <div className="flex item-center space-x-4">
            {/*Display current user role */}
            <span className="text-sm text-gray-600 capitalize">
              Role:{userRole}
            </span>
            {/* Longout Button */}
            <button
              onClick={handleLogout}
              className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
