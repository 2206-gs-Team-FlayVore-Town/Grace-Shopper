import React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import { logout } from "../store";
import AddToCart from "./AddToCart";
import EditCart from "./EditCart"
import { Login, Signup } from "./AuthForm";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <nav>
    <div>
      <div className="row">
        <h1 className="store-name">Store Name</h1>
        <div className="search-bar">
          <input className="search-bar" type="text" placeholder="Search.." />
        </div>
        <div>
          {isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}
              <Link to="/history">Orders/History</Link>
              <Link to="/account">Account</Link>
              <Link to="/shoppingCart">🛒 Cart</Link>
              <Link to="/">Home</Link>
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
              <Link to="/">Home</Link>
            </div>
          )}
        </div>
      </div>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />   
      </div>
      <div className="row">
        <Link to="/all">All</Link>
        <Link to="/characterMinis">Character Minis</Link>
        <Link to="/creatureMinis">Creature Minis</Link>
        <Link to="/accessories">Accessories</Link>
        <Link to="/dice">Dice</Link>
        <Link to="/artSupplies">Art Supplies</Link>
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
