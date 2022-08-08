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
  constructor(props) {
    super(props);
    this.state = {
      filter: "all",
    };
  }

  componentDidMount() {
    this.props.getProducts();
    // console.log("props:", this.props, "state", this.state);
  }

  render() {
    const { products } = this.props;
    let { filter } = this.state;
    let filteredProducts = products.filter(
      (product) => product.category === filter || filter === "all"
    );
    const topItems = filteredProducts.slice(0, 4);
    const otherItems = filteredProducts.slice(5);
    return (
      <div>
        <div className="row">
          <div className="spacer" />
          <div className="row">
            <Link
              to="/home/all"
              onClick={() => this.setState({ filter: "all" })}
            >
              All
            </Link>
            <Link
              to="/home/characterMinis"
              onClick={() => this.setState({ filter: "characterMinis" })}
            >
              Character Minis
            </Link>
            <Link
              to="/home/creatureMinis"
              onClick={() => this.setState({ filter: "creatureMinis" })}
            >
              Creature Minis
            </Link>
            <Link
              to="/home/accessories"
              onClick={() => this.setState({ filter: "accessories" })}
            >
              Accessories
            </Link>
            <Link
              to="/home/dice"
              onClick={() => this.setState({ filter: "dice" })}
            >
              Dice
            </Link>
            <Link
              to="/home/artSupplies"
              onClick={() => this.setState({ filter: "artSupplies" })}
            >
              Art Supplies
            </Link>
          </div>{" "}
          <div className="spacer" />
        </div>
        <div className="row">
          <FilterBar />
          <div className="products-array">
            <div className="row">
              {topItems.map((product) => {
                return (
                  <SingleProductInList product={product} key={product.id} />
                );
              })}
            </div>
            <div className="all-product-page">
              {otherItems.map((product) => {
                return (
                  <SingleProductInList product={product} key={product.id} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    filter: "all",
    products: state.multipleProducts,
  };
};

const mapDispatch = (dispatch) => ({
  getProducts: () => dispatch(fetchProducts()),
});

export default connect(mapState, mapDispatch)(Home);
