import React from "react";
import { connect } from "react-redux";
import { SingleProductInList } from "./SingleProductInList";
import { FilterBar } from "./FilterBar";

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username } = props;

  return (
    <div className="row">
      <FilterBar/>
      <div className="products-array">
        <div className="row">
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
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
