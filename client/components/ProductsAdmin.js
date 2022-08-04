import React from "react";
import { connect } from "react-redux";
import { editingProduct, deletingProduct, addingProduct } from "../store";
import { fetchProducts } from "../store/multipleProducts";

/**
 * COMPONENT
 */
export class Home extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div>
        {this.props.products.map((product)=> {
              return (<SingleProductInList product={product} key={product.id}/>)
        })}
        
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
  getProducts: () => dispatch(fetchProducts()),
  edit: (product) => dispatch(editingProduct(product)),
  delete: (product) => dispatch(deletingProduct(product)),
  add: (product) => dispatch(addingProduct(product)),
});

export default connect(mapState, mapDispatch)(Home);
