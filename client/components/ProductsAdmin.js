import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/multipleProducts";
import AddProduct from "./AddProduct"
import ProductAdmin from "./ProductAdmin"

/**
 * COMPONENT
 */
export class Home extends React.Component {
  constructor () {
    super()
    this.refresh = this.refresh.bind(this)
  }
  
  componentDidMount() {
    this.props.getProducts()
  }
  
  refresh() {
    this.props.getProducts()
  }

  render() {
    return (
      <div>
        {this.props.products.map((product)=> {
              return <ProductAdmin product={product} key={product.id} refresh={this.refresh}/>
        })}
        <AddProduct refresh={this.refresh}/>
      </div>
    );
  }
}

//name:  price:  quantityPerItem: specifications: rating: company: stock:

const mapState = (state) => {
  return {
    products: state.multipleProducts,
  };
};

const mapDispatch = (dispatch) => ({
  getProducts: () => dispatch(fetchProducts())
});

export default connect(mapState, mapDispatch)(Home);
