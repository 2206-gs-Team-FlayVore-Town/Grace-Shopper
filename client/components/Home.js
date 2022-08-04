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
    products.shift();
    const topItems = products.splice(0,4);
    const row2 = products.splice(0,5);
    const row3 = products.splice(0,5);
    const row4 = products.splice(0,5);

    return (
      <div className="row">
        <FilterBar />
        <div className="products-array">
          <div className="row">
            {topItems.map((product)=> {
              return (<SingleProductInList product={product} key={product.id}/>)
            })}
          </div>
          <div className="row">
          {row2.map((product)=> {
              return (<SingleProductInList product={product} key={product.id}/>)
            })}
          </div>
          <div className="row">
          {row3.map((product)=> {
              return (<SingleProductInList product={product} key={product.id}/>)
            })}
          </div>
          <div className="row">
          {row4.map((product)=> {
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
    username: state.auth.username,
    products: state.multipleProducts,
  };
};

const mapDispatch = (dispatch) => ({
  getProducts: () => dispatch(fetchProducts()),
});

export default connect(mapState, mapDispatch)(Home);
