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
      sortByParam: "Rating (high to low)",
      sortedProducts: [],
    };
  }

  componentDidMount() {
    this.props.getProducts();
  }

  handleSortByParam = (sortByParam) => {
    this.setState({sortByParam: sortByParam})
  }

  render() {
    const { products } = this.props;
    let { filter, sortByParam, sortedProducts } = this.state;
    sortedProducts = products.filter(
      (product) => product.category === filter || filter === "all"
    );
    sortedProducts = sortBy(sortByParam, sortedProducts);
    const topItems = sortedProducts.slice(0, 4);
    const otherItems = sortedProducts.slice(5);
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
          <FilterBar selectSortByParam={this.handleSortByParam}/>
          <div className="products-array">
            <div className="top-row">
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

const sortBy = (param, arr) => {
  console.log("param in sortBy:", param)
  switch (param) {
    case "Price (low to high)":
      return arr.sort((a, b) => a.price - b.price);
    case "Price (high to low)":
      return arr.sort((a, b) => b.price - a.price);
    case "Rating (low to high)":
      return arr.sort((a, b) => a.rating - b.rating);
    case "Rating (high to low)":
      return arr.sort((a, b) => b.rating - a.rating);
    default:
      return arr.sort((a, b) => a.rating - b.rating);
  }
};

const mapState = (state) => {
  return {
    filter: "all",
    sortByParam: "Rating (high to low)",
    sortedProducts: [],
    products: state.multipleProducts,
  };
};

const mapDispatch = (dispatch) => ({
  getProducts: () => dispatch(fetchProducts()),
});

export default connect(mapState, mapDispatch)(Home);
