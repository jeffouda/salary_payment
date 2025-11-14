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

    </div>
  );
};
