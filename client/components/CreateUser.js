import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../store/singleUser";
import NewUserForm from "./NewUserForm";

class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      addressStreet: "",
      addressCity: "",
      addressCountry: "",
      addressZip: "",
      isMounted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
  }

  componentDidMount() {
    this.setState({ isMounted: true });
    this.state.isMounted && this.handleSubmit();
  }

  componentWillUnmount() {
    this.setState({ isMounted: false });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  selectCountry(value) {
    if (value) {
      this.setState({ addressCountry: value });
    }
  }

  async handleSubmit(e) {
    e.preventDefault();
    if (this.state.isMounted === true) {
      await this.props.createUser({ ...(this.state || {}) });
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        addressStreet: "",
        addressCity: "",
        addressCountry: "",
        addressZip: "",
        isMounted: false,
      });
    }
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      addressStreet,
      addressCity,
      addressCountry,
      addressZip,
    } = this.state;
    const { handleSubmit, handleChange, selectCountry } = this;

    return (
      <div>
        <NewUserForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          selectCountry={selectCountry}
          firstName={firstName}
          lastName={lastName}
          password={password}
          email={email}
          addressStreet={addressStreet}
          addressCity={addressCity}
          addressCountry={addressCountry}
          addressZip={addressZip}
        />
      </div>
    );
  }
}

const mapDispatch = (dispatch, { history }) => ({
  createUser: (user) => dispatch(createUser(user, history)),
});

export default connect(null, mapDispatch)(CreateUser);
