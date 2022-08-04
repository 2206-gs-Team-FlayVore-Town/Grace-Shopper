import React from "react";
import { connect } from "react-redux";
import { SingleProductInList } from "./SingleProductInList";
import { FilterBar } from "./FilterBar";
import { fetchProducts } from "../store/multipleProducts";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
export class Home extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { products } = this.props;
    console.log("!!!", products);
    products.shift();
    const topItems = products.splice(0, 4);
    const row2 = products.splice(0, 5);
    const row3 = products.splice(0, 5);
    const row4 = products.splice(0, 5);

    return (
      <div className="row">
        <FilterBar />
        <div className="products-array">
          <div className="row">
            {topItems.map((product) => {
              return (
                <Link to={`/products/${product.id}`}>
                  <SingleProductInList product={product} key={product.id} />
                </Link>
              );
            })}
          </div>
          <div className="row">
            {row2.map((product) => {
              return (
                <Link to={`/products/${product.id}`}>
                  <SingleProductInList product={product} key={product.id} />
                </Link>
              );
            })}
          </div>
          <div className="row">
            {row3.map((product) => {
              return (
                <Link to={`/products/${product.id}`}>
                  <SingleProductInList product={product} key={product.id} />
                </Link>
              );
            })}
          </div>
          <div className="row">
            {row4.map((product) => {
              return (
                <Link to={`/products/${product.id}`}>
                  <SingleProductInList product={product} key={product.id} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    firstName: state.auth.firstName,
    products: state.multipleProducts,
  };
};

const mapDispatch = (dispatch) => ({
  getProducts: () => dispatch(fetchProducts()),
});

export default connect(mapState, mapDispatch)(Home);
