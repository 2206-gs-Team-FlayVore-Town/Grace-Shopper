import React from "react";

export class FilterBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            priceArr : ['0,499','500,999','1000,1499','1500,2499','2500,4999','5000,100000000'],
            price0to5 : true,
            price5to10 : true,
            price10to15 : true,
            price15to25 : true,
            price25to50 : true,
            price50up : true,
        };
        this.handlePriceSelect=this.handlePriceSelect.bind(this);
      }

    handlePriceSelect = (arr, evt, bool) => {
          console.log("handlePriceSelect arrIn: ", arr)
          if (bool) {
              arr.push(evt.target.value);
          } else {
              arr = arr.filter((e) => e !== evt.target.value);
          }
          console.log("handlePriceSelect arrOut", arr)
          this.setState({priceArr: arr}, () => console.log(this.state.priceArr))
          this.props.handleFilterPrice(arr)
      };

    render() {
        
        let {priceArr, price0to5, price5to10, price10to15, price15to25, price25to50, price50up} = this.state;
        console.log("@@@@",price0to5);
    return (
      <div className="filter-bar">
        <h2> Sort by: </h2>
        <select
          onChange={(evt) => {
            this.props.selectSortByParam(evt.target.value);
          }}
        >
          <option value="Rating (high to low)">Rating (high to low)</option>
          <option value="Rating (low to high)">Rating (low to high)</option>
          <option value="Price (low to high)">Price (low to high)</option>
          <option value="Price (high to low)">Price (high to low)</option>
        </select>
        <h2> Filter by: </h2>
        <h3> Price:</h3>
        <div>
          <div className="filter-row">
            <input
              type="checkbox"
              value={[0, 499]}
              checked={price0to5}
              onChange={(event) => {
                price0to5 = !price0to5;
                this.setState({price0to5 : price0to5});
                this.handlePriceSelect(priceArr,event,price0to5)
              }}
            />
            Less than $5.00
          </div>
          <div className="filter-row">
            <input
              type="checkbox"
              value={[500, 999]}
              checked={price5to10}
              onChange={(event) => {
                price5to10 = !price5to10;
                this.setState({price5to10 : price5to10});
                this.handlePriceSelect(priceArr,event,price5to10)
              }}
            />
            $5.00-$9.99
          </div>
          <div className="filter-row">
            <input
              type="checkbox"
              value={[1000, 1499]}
              checked={price10to15}
              onChange={(event) => {
                price10to15 = !price10to15;
                this.setState({price10to15 : price10to15});
                this.handlePriceSelect(priceArr,event,price10to15)
              }}
            />
            $10.00-$14.99
          </div>
          <div className="filter-row">
            <input
              type="checkbox"
              value={[1500, 2499]}
              checked={price15to25}
              onChange={(event) => {
                price15to25 = !price15to25;
                this.setState({price15to25 : price15to25});
                this.handlePriceSelect(priceArr,event,price15to25)
              }}
            />
            $15.00-$24.99
          </div>
          <div className="filter-row">
            <input
              type="checkbox"
              value={[2500, 4999]}
              checked={price25to50}
              onChange={(event) => {
                price25to50 = !price25to50;
                this.setState({price25to50 : price25to50});
                this.handlePriceSelect(priceArr,event,price25to50)
              }}
            />
            $25.00-$49.99
          </div>
          <div className="filter-row">
            <input
              type="checkbox"
              value={[5000, 100000000]}
              checked={price50up}
              onChange={(event) => {
                price50up = !price50up;
                this.setState({price50up : price50up});
                this.handlePriceSelect(priceArr,event,price50up)

              }}
            />
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
    );
  }
}
