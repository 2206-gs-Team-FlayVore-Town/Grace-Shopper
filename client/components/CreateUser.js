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
    const { handleSubmit, handleChange, handleNewUser } = this;

    return (
      <div>
        <NewUserForm
          handleNewUser={handleNewUser}
          handleChange={handleChange}
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

const mapDispatch = (dispatch, { history }) => {
  return {
    handleNewUser(e) {
      e.preventDefault();
      const firstName = e.target.firstName.value;
      const lastName = e.target.lastName.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const addressStreet = e.target.addressStreet.value;
      const addressCity = e.target.addressCity.value;
      const addressCountry = e.target.addressCountry.value;
      const addressZip = e.target.addressZip.value;
      dispatch(
        createUser(
          firstName,
          lastName,
          email,
          password,
          addressCity,
          addressStreet,
          addressCountry,
          addressZip
        )
      );
    },
  };
};

export default connect(null, mapDispatch)(CreateUser);
