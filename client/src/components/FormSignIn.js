import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Grid, Button, Box } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { setAuthToken } from "./setAuthToken";
import { AlertContainer, alert } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';



const FormSignUp = () => {

  const alertSuccess = () => alert({ message: 'success', type: 'success' });

  // handing the show/hide password
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);


  const theme = createTheme({
    // customizing the fonts
    typography: {
      fontFamily: ["DynaPuff", "Noto-sans", "sans-serif"].join(","),
      fontSize: 15,
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* fromik a react library for implementing forms */}
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={async (values) => {
            // Logging AND stroing the token 
            try {
              await axios.post('http://localhost:4000/api/user/login', values).then(
                response => {
                  const token = response.data.token;
                  localStorage.setItem("token", token);
                  setAuthToken(token)

                  window.location.href = "/simpleView"
                }
              )

            } catch (error) {
              alert(error.response.data.error + " - Please Enter the right credentials")
            }
            console.log(values);
          }}
          validationSchema={yup.object({
            // for fields validation
            email: yup.string().email().required("Ce Champ est obligatoire"),
            password: yup.string().required("Ce Champ est obligatoire"),
          })}
        >
          {(formik) => (
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box style={styles.SignCard}>
                <img
                  src={require("./img/logo_tmpa.png")}
                  alt="logo"
                  style={styles.logo}
                />
                <form onSubmit={formik.handleSubmit} autoComplete="off">
                  <Grid item>
                    <TextField
                      required
                      name="email"
                      value={formik.values.email}
                      id="outlined-start-adornment"
                      label="E-mail"
                      variant="outlined"
                      style={styles.Text}
                      size="small"
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      name="password"
                      value={formik.values.password}
                      id="outlined-required"
                      label="Mot de passe"
                      placeholder="***"
                      variant="outlined"
                      type={showPassword ? "text" : "password"}
                      style={styles.Text}
                      size="small"
                      onChange={formik.handleChange}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              style={styles.toggleIcon}
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Button
                    type="submit"

                    color="primary"
                    variant="contained"
                    style={styles.SignInButton}
                    onClick={alert({ message: 'info', type: 'info' })}
                  >
                    <Typography variant="h5">Sign In</Typography>
                  </Button>
                </form>
              </Box>
            </Grid>
          )}
        </Formik>
      </ThemeProvider >
    </>
  );
};

const styles = {
  Text: {
    //text fields
    margin: 15,
    width: 345,
  },
  button: {
    //buttons
    margin: 30,
    alignItems: "center",
    width: 200,
    height: 50,
  },
  SignInButton: {
    margin: 30,
    marginLeft: "22%",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 50,
  },
  logo: {
    //TMPA Logo
    margin: 20,
    height: 100,
    width: 300,
  },
  toggleIcon: {
    // the show/hide password logo
    padding: 0,
  },
  SignCard: {
    //box containing the whole card
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 250,
    padding: 20,
    borderRadius: 16,
    backgroundColor: "#e6e6e6",
    boxShadow: "0px 0px 25px 1px white",
  },
};

export default FormSignUp;

