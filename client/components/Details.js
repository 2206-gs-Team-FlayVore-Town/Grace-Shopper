import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchSingleProduct } from "../store/singleProduct";
import { connect } from "react-redux";
import AddToCart from "./AddToCart";

class Details extends Component {
  async componentDidMount() {
    await this.props.fetchSingleProduct(this.props.match.params.id);
  }

  render() {
    const { name, imgURL, price, specifications, company, rating, stock, id } =
      this.props.selectedProduct;

    return (
      <div className="container">
        <div className="inner-container">
          <div className="item-left">
            <img src={imgURL} alt="Item image" />
          </div>
          <div className="item-right">
            <div className="header">
              <p>{company}</p>
              <h1>{name}</h1>
              <h3>${(price * 0.01).toFixed(2)}</h3>
              <p>{specifications}</p>
              <p>Available Units: {stock}</p>
            </div>
            <div className="rating">Rating: {(rating * 0.1).toFixed(1)}/5</div>
            <div className="button-container">
              <AddToCart product={id} />
              <button className="wishlist">Add to Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    selectedProduct: state.singleProduct,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
  };
};

export default connect(mapState, mapDispatch)(Details);
