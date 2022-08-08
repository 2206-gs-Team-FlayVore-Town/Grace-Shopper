import React from "react";
import { connect } from "react-redux";
import { authenticate, createUser } from "../store";
import { Link, useHistory } from "react-router-dom";
import SignUpForm from "./SignUpForm";

import {
  Typography,
  ThemeProvider,
  Box,
  CssBaseline,
  createTheme,
  Container,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

const theme = createTheme();

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  let history = useHistory();
  const { name, displayName, handleSubmit, handleNewUser, error } = props;

  const redirect = () => {
    setTimeout(() => {
      history.push("/");
    }, 500);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form
            onSubmit={displayName === "Sign Up" ? handleNewUser : handleSubmit}
            name={name}
          >
            <Grid container spacing={2}>
              {displayName === "Sign Up" && <SignUpForm />}

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={redirect}
            >
              {displayName}
            </Button>

            {displayName === "Sign Up" && (
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            )}
            {error && error.response && <div> {error.response.data} </div>}
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(authenticate(email, password, formName));
    },
    handleNewUser(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const firstName = evt.target.firstName.value;
      const lastName = evt.target.lastName.value;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      const addressStreet = evt.target.addressStreet.value;
      const addressCity = evt.target.addressCity.value;
      const addressCountry = evt.target.addressCountry.value;
      const addressZip = evt.target.addressZip.value;
      dispatch(
        createUser(
          firstName,
          lastName,
          email,
          password,
          addressStreet,
          addressCity,
          addressCountry,
          addressZip
        )
      );
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
