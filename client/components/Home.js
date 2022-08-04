import React from "react";
import { connect } from "react-redux";
import { SingleProductInList } from "./SingleProductInList";
import { FilterBar } from "./FilterBar";
import { fetchProducts } from "../store/multipleProducts";

/**
 * COMPONENT
 */
export class Home extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }
  
  render() {
    const { products } = this.props;
    console.log("!!!", products)
    return (
      <div className="row">
        <FilterBar />
        <div className="products-array">
          <div className="row">
            <SingleProductInList product={products[1]}/>
            <SingleProductInList product={products[2]} />
            <SingleProductInList product={products[3]} />
            <SingleProductInList product={products[4]} />
          </div>
          <div className="row">
            <SingleProductInList />
            <SingleProductInList />
            <SingleProductInList />
            <SingleProductInList />
            <SingleProductInList />
          </div>
          <div className="row">
            <SingleProductInList />
            <SingleProductInList />
            <SingleProductInList />
            <SingleProductInList />
            <SingleProductInList />
          </div>
        </div>
      </div>
    );
  }
}
/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
    products: state.multipleProducts,
  };
};

const mapDispatch = (dispatch) => ({
  getProducts: () => dispatch(fetchProducts()),
});

export default connect(mapState, mapDispatch)(Home);
