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
} from "@material-ui/core";

const theme = createTheme();

export default function SignUpForm() {
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
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
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
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="addressStreet"
                label="Street Address"
                name="addressStreet"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name="addressCity"
                required
                fullWidth
                id="addressCity"
                label="City"
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
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
