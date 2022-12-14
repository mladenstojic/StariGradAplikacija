import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex-container">
      <h1>Page not found </h1>
	  <h4><Link to='/'>Return back to homepage</Link></h4>
    </div>
  );
};

export default NotFound;
