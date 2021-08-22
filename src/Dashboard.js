import { faPlus, faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-center mb-3">
        <h1 className="h1 text-gray-800">Dashboard</h1>
      </div>
      <div className="d-md-flex justify-content-center">
        <Link to="/product" className="btn btn-lg btn-outline-success p-3 m-5">
          <FontAwesomeIcon key="sd88" icon={faWrench}></FontAwesomeIcon>
          <span> Products</span>
        </Link>
        <Link to="/create-product" className="btn btn-lg btn-success p-3 m-5">
          <FontAwesomeIcon key="hh44" icon={faPlus}></FontAwesomeIcon>
          <span> Create Product</span>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
