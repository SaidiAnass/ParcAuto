import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { Grid, Button, Box } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { Link } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'

const FormSignUp = () => {
  const [fields, setFields] = useState({
    // for stroring the inputs
    email: '',
    password: '',
  })

  const [showPassword, setShowPassword] = useState(false)    // handing the show/hide password 
  const handleClickShowPassword = () => setShowPassword(!showPassword)

  const handleChange = (e) => {
    // handles the changes in the fields
    const { name, value } = e.target
    setFields((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      }
    })
    console.log(fields)
  }

  const theme = createTheme({
    // customizing the fonts
    typography: {
      fontFamily: ['DynaPuff', 'Noto-sans', 'sans-serif'].join(','),
      fontSize: 15,
    },
  })
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box style={styles.SignCard}>
            <img
              src={require('./img/logo_tmpa.png')}
              alt="logo"
              style={styles.logo}
            />
            <form autoComplete="off">
              <Grid item>
                <TextField
                  required
                  name="email"
                  value={fields.email}
                  id="outlined-start-adornment"
                  label="E-mail"
                  variant="outlined"
                  style={styles.Text}
                  size="small"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  required
                  name="password"
                  value={fields.password}
                  id="outlined-required"
                  label="Mot de passe"
                  placeholder="***"
                  variant="outlined"
                  type={showPassword ? 'text' : 'password'}
                  style={styles.Text}
                  size="small"
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          style={styles.toggleIcon}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </form>
            <Link href="/simpleView" underline="none">
              <Button color="primary" variant="contained" style={styles.button}>
                <Typography variant="h5">Sign In</Typography>
              </Button>
            </Link>
          </Box>
        </Grid>
      </ThemeProvider>
    </>
  )
}

const styles = {
  Text: { //text fields
    margin: 15,
    width: 345,
  },
  button: { //buttons
    margin: 30,
    alignItems: 'center',
    width: 200,
    height: 50,
  },
  logo: {   //TMPA Logo 
    margin: 20,
    height: 100,
    width: 300,
  },
  toggleIcon: { // the show/hide password logo 
    padding: 0,
  },
  SignCard: {   //box containing the whole card
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250,
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#e6e6e6',
    boxShadow: '0px 0px 25px 1px white',
  },
}

export default FormSignUp

/* STILL NEEDS JWT FOR AUTHENTICATION */
