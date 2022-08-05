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
    const topItems = products.splice(0,4);

    return (
      <div className="row">
        <FilterBar />
        <div className="products-array">
          <div className="row">
            {topItems.map((product) => {
              return <SingleProductInList product={product} key={product.id} />;
            })}
          </div>
          <div className="all-product-page">
          {products.map((product)=> {
              return (<SingleProductInList product={product} key={product.id}/>)
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
