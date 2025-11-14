//Import React and routing dependencies
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import our components
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

//Import CSS
import "./index.css";

function App() {
  return (
    //Router enables navigation between different pages
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/*Routes defines which component to show for each URL*/}
        <Routes>
          {/*When users goes to "/", show Login component */}
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
