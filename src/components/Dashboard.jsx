// React hooks for state and lifecycle
import React, { useState, useEffect } from "react";
//Import Links for navigation between pages
import { Link } from "react-router-dom";
//Import mock data
import { sampleRequests } from "../data/mockData";

const Dashboard = () => {
  //useState hook mananges request data component state
  const [requests, setRequests] = useState([]);
  //useState  hook manages user role in component state
  const [userRole, setUserRole] = useState("");

  //useEffect hook runs when component mounts (like componentDidMount)
  useEffect(() => {
    //Get user role from local storage
    const role = localStorage.getItem("userRole") || "finance";
    setUserRole(role);
    //Set requests data from mock data
    setRequests(sampleRequests);
  }, []); // Empty dependency array means this runs once when component mounts

  //Calculate counts for dashboard cards
  const pendingCount = requests.filter(
    (req) => req.status === "pending"
  ).length;
  const approvedCount = requests.filter(
    (req) => req.status == "approved"
  ).length;

  return (
    <div className="p-6">
      {/**Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="text-sm text-gray-600">
          Logged in as:
          <span className="font-semibold capitalize">{userRole}</span>
        </div>
      </div>

      {/**Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">
            Pending Requests
          </h3>
          <p className="text-3xl font font-semibold text-yellow-600">
            {pendingCount}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">approved</h3>
          <p className="text-3xl font-bold text-green-600">{approvedCount}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">
            Total Requests
          </h3>
          <p className="text-3xl font-bold text-blue-600">{requests.length}</p>
        </div>
      </div>

      {/**Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Quick ACtions</h2>
        <div className="flex gap-4">
          {/**Show Review Approvals button only for admin users */}
          {userRole === "finance" && (
            <Link
              to="/create-request"
              className="bg-blue-500 text-white px-4 py-2 rounded hovr:bg--blue-600"
            >
              Create Salary Request
            </Link>
          )}

          {/** Show Review Approvals button only for admin users
           */}

          {userRole === "admin" && (
            <Link
              to="/pending-approvals"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Review Pending Approvals
            </Link>
          )}
          <Link
            to="/payment-history"
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            View Payment History
          </Link>
        </div>
      </div>
      {/** Recent Activity Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Salary Requests</h2>
        <div className="overflow-xauto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left">Employee</th>
                <th className="px-4 py-2 text-left">Amount</th>
                <th className="px-4 py-2 text-left">Month</th>
                <th className="px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {/** Map through request array to create table rows */}
              {requests.map((request) => (
                <tr key={request.id} className="border-t">
                  <td className="px-4 py-2">{request.employeeName}</td>
                  <td className="px-4 py-2">{request.amount}</td>
                  <td className="px-4 py-2">{request.month}</td>
                  <td className="px-4 py-2">
                    {/** Conditional Styling based on status */}
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        request.status === "pending"
                          ? "bg-yellow-100 text yellow-800"
                          : request.stauts === "approved"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {request.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
