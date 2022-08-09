import React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import { logout } from "../store";
import { Login, Signup } from "./AuthForm";

const Navbar = ({ handleClick, isLoggedIn, isAdmin }) => (
  <nav>
    <div>
      <div className="row">
        <div></div>
        <div className="title"><h1 className="store-name">Tavern Minis</h1> <h3 className="sub-name"> Accessories, Art Supplies, and More</h3></div>
        <div>
          {isLoggedIn ? (
            <div className="row">
              {/* The navbar will show these links after you log in */}
              {isAdmin ? (
                <div><Link to="/users">Users</Link><Link to="/products">Products</Link></div>) : (<span></span>)
              }
              <Link to="/history">Orders/History</Link>
              <Link to="/account">Account</Link>
              <Link to="/shoppingCart">🛒 Cart</Link>
              <Link to="/home">Home</Link>
              <a href="#" onClick={handleClick}>
                Logout
              </a>
            </div>
          ) : (
            <div className="row">
              {/* The navbar will show these links before you log in */}
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
              <Link to="/shoppingCart">🛒 Cart</Link>
              <Link to="/home">Home</Link>
            </div>
          )}
        </div>
      </div>
      <hr />
    </div>
  </nav>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    isAdmin: state.auth.admin
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
