import React from "react";

export class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priceArr: [
        "0,499",
        "500,999",
        "1000,1499",
        "1500,2499",
        "2500,4999",
        "5000,100000000",
      ],
      price0to5: true,
      price5to10: true,
      price10to15: true,
      price15to25: true,
      price25to50: true,
      price50up: true,
      companyArr: ["Games Workshop", "Reaper Minis", "Wizards of the Coast", "Hero Forge", "Dwarven Forge", "Miniature Market"],
      manuGW: true,
      manuRM: true,
      manuWotC: true,
      manuHF: true,
      manuDF: true,
      manuMM: true
    };
    this.handlePriceSelect = this.handlePriceSelect.bind(this);
    this.handleCompanySelect = this.handleCompanySelect.bind(this);
  }

  handlePriceSelect = (arr, evt, bool) => {
    if (bool) {
      arr.push(evt.target.value);
    } else {
      arr = arr.filter((e) => e !== evt.target.value);
    }
    this.setState({ priceArr: arr });
    this.props.handleFilterPrice(arr);
  };

  handleCompanySelect = (arr, evt, bool) => {
    if (bool) {
      arr.push(evt.target.value);
    } else {
      arr = arr.filter((e) => e !== evt.target.value);
    }
    this.setState({ companyArr: arr });
    this.props.handleFilterCompany(arr);
  };

  render() {
    let {
      priceArr,
      price0to5,
      price5to10,
      price10to15,
      price15to25,
      price25to50,
      price50up,
      companyArr,
      manuDF,
      manuGW,
      manuHF,
      manuMM,
      manuRM,
      manuWotC
    } = this.state;
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
                this.setState({ price0to5: price0to5 });
                this.handlePriceSelect(priceArr, event, price0to5);
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
                this.setState({ price5to10: price5to10 });
                this.handlePriceSelect(priceArr, event, price5to10);
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
                this.setState({ price10to15: price10to15 });
                this.handlePriceSelect(priceArr, event, price10to15);
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
                this.setState({ price15to25: price15to25 });
                this.handlePriceSelect(priceArr, event, price15to25);
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
                this.setState({ price25to50: price25to50 });
                this.handlePriceSelect(priceArr, event, price25to50);
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
                this.setState({ price50up: price50up });
                this.handlePriceSelect(priceArr, event, price50up);
              }}
            />
            Higher than $50.00
          </div>
        </div>
        <h3> Company:</h3>
        <div className="filter-row">
          <input
            type="checkbox"
            value={"Miniature Market"}
            checked={manuMM}
            onChange={(event) => {
                manuMM = !manuMM;
              this.setState({ manuMM: manuMM });
              this.handleCompanySelect(companyArr, event, manuMM);
            }}
          />
          Miniature Market{" "}
        </div>{" "}
        <div className="filter-row">
          <input
            type="checkbox"
            value={"Games Workshop"}
            checked={manuGW}
            onChange={(event) => {
                manuGW = !manuGW;
              this.setState({ manuGW: manuGW });
              this.handleCompanySelect(companyArr, event, manuGW);
            }}
          />
          Games Workshop
        </div>{" "}
        <div className="filter-row">
          <input
            type="checkbox"
            value={"Reaper Minis"}
            checked={manuRM}
            onChange={(event) => {
                manuRM = !manuRM;
              this.setState({ manuRM: manuRM });
              this.handleCompanySelect(companyArr, event, manuRM);
            }}
          />
          Reaper Minis
        </div>{" "}
        <div className="filter-row">
          <input
            type="checkbox"
            value={"Wizards of the Coast"}
            checked={manuWotC}
            onChange={(event) => {
                manuWotC = !manuWotC;
              this.setState({ manuWotC: manuWotC });
              this.handleCompanySelect(companyArr, event, manuWotC);
            }}
          />
          Wizards of the Coast
        </div>{" "}
        <div className="filter-row">
          <input
            type="checkbox"
            value={"Hero Forge"}
            checked={manuHF}
            onChange={(event) => {
                manuHF = !manuHF;
              this.setState({ manuHF: manuHF });
              this.handleCompanySelect(companyArr, event, manuHF);
            }}
          />
          Hero Forge
        </div>{" "}
        <div className="filter-row">
          <input
            type="checkbox"
            value={"Dwarven Forge"}
            checked={manuDF}
            onChange={(event) => {
                manuDF = !manuDF;
              this.setState({ manuDF: manuDF });
              this.handleCompanySelect(companyArr, event, manuDF);
            }}
          />
          Dwarven Forge
        </div>{" "}
      </div>
    );
  }
}
