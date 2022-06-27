import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className=" header-container row align-items-center justify-content-between">
          <div className="col-lg-1">
            <img
              className="img-fluid"
              src="./images/logo-udemy.svg"
              alt="logo"
            />
          </div>
          <div className="menu col-lg-2">
            <Link to="/">Categories</Link>
          </div>
          <div className="input-area col-lg-4">
            <form action="">
              <input
                type="text"
                className="form-control"
                placeholder="Search for anything"
              />
            </form>
          </div>

          <div className=" button-area col-lg-4">
            <button className=" btn-1 ">Log in</button>
            <button className=" btn-2 ">Sign up</button>
          </div>
          <div className="col-lg-1">
            <i className="icon">
              <FiShoppingCart />
            </i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
