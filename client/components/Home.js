import React from "react";
import { connect } from "react-redux";
import { SingleProductInList } from "./SingleProductInList";

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username } = props;

  return (
    <div className="row">
      <div className="filter-bar">
        <h2> Filter by: </h2>
        <h3> Price:</h3>
        <div>
          <div className="filter-row">
            <input type="checkbox" />
            Less than $5.00
          </div>
          <div className="filter-row">
            <input type="checkbox" />
            $5.00-$9.99
          </div>
          <div className="filter-row">
            <input type="checkbox" />
            $10.00-$14.99
          </div>
          <div className="filter-row">
            <input type="checkbox" />
            $15.00-$24.99
          </div>
          <div className="filter-row">
            <input type="checkbox" />
            $24.99-$50.00
          </div>
          <div className="filter-row">
            <input type="checkbox" />
            Higher than $50.00
          </div>
        </div>
        <h3> Size:</h3>
        <div>
          <div className="filter-row">
            <input type="checkbox" />
            Less than 25mm
          </div>
          <div className="filter-row">
            <input type="checkbox" />
            25 to 50 mm
          </div>
          <div className="filter-row">
            <input type="checkbox" />
            Greater than 50mm
          </div>
        </div>
        <h3> Manufacturer:</h3>
        <div>
          <div className="filter-row">
            <input type="checkbox" />
            Wizards of the Coast
          </div>
          <div className="filter-row">
            <input type="checkbox" />
            Games Workshop
          </div>
          <div className="filter-row">
            <input type="checkbox" />
            Reaper
          </div>
          <div className="filter-row">
            <input type="checkbox" />
            Other
          </div>
        </div>
        <h3> Game:</h3>
        <div>
          <div className="filter-row">
            <input type="checkbox" />
            Dungeons and Dragons
          </div>
          <div className="filter-row">
            <input type="checkbox" />
            Pathfinder
          </div>
          <div className="filter-row">
            <input type="checkbox" />
            Warhammer
          </div>
          <div className="filter-row">
            <input type="checkbox" />
            Warhammer 40K
          </div>
          <div className="filter-row">
            <input type="checkbox" />
            Mech Warriors
          </div>
          <div className="filter-row">
            <input type="checkbox" />
            Other
          </div>
        </div>
      </div>
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
