import React from "react";
import { Link } from "react-router-dom";

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
  MenuItem,
  Select,
} from "@material-ui/core";

const theme = createTheme();

export default function NewUserForm(props) {
  const {
    // handleSubmit,
    handleNewUser,
    handleChange,
    firstName,
    lastName,
    email,
    password,
    addressStreet,
    addressCity,
    addressCountry,
    addressZip,
  } = props;

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
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleNewUser}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={firstName}
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleChange}
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
                  value={password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                Address
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="addressStreet"
                  label="Street Address"
                  name="addressStreet"
                  value={addressStreet}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  name="addressCity"
                  required
                  fullWidth
                  id="addressCity"
                  label="City"
                  value={addressCity}
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="addressZip"
                  label="Postal / Zip Code"
                  name="addressZip"
                  value={addressZip}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="standard"
                  id="addressCountry"
                  label="Country"
                  name="addressCountry"
                  value={addressCountry}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
