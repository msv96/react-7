import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>
      <div className="d-md-flex justify-content-center">
        <Link to="/product" className="btn btn-lg btn-outline-primary p-3 m-5">
          <FontAwesomeIcon icon={faWrench}></FontAwesomeIcon>
          <span> Products</span>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
