import React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import { logout } from "../store";
import AddToCart from "./AddToCart";
import EditCart from "./EditCart"
import { Login, Signup } from "./AuthForm";

const Navbar = ({ handleClick, isLoggedIn, isAdmin }) => (
  <nav>
    <div>
      <div className="row">
        <h1 className="store-name">Tavern Minis</h1>
        <div className="search-bar">
          <input className="search-bar" type="text" placeholder="Search.." />
        </div>
        <div>
          {isLoggedIn ? (
            <div>
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
<<<<<<< HEAD
      <Route path="/home" element={
            <div className="row">
            <Link to="/all">All</Link>
            <Link to="/characterMinis">Character Minis</Link>
            <Link to="/creatureMinis">Creature Minis</Link>
            <Link to="/accessories">Accessories</Link>
            <Link to="/dice">Dice</Link>
            <Link to="/artSupplies">Art Supplies</Link>
          </div>
        }>

      </Route>
=======
      
      <div className="row">
        <Link to="/all">All</Link>
        <Link to="/characterMinis">Character Minis</Link>
        <Link to="/creatureMinis">Creature Minis</Link>
        <Link to="/accessories">Accessories</Link>
        <Link to="/dice">Dice</Link>
        <Link to="/artSupplies">Art Supplies</Link>
      </div>
>>>>>>> 91d0d7fac3deaf2d766bb4bb9eb1eea1673e91f3
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
