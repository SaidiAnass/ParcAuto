import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { Grid, Button, Box } from '@material-ui/core';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Link } from '@material-ui/core';




const FormSignUp = () => {


    const theme = createTheme({
        typography: {
            fontFamily: [
                "DynaPuff",
                "Noto-sans",
                "sans-serif"
            ].join(","),
            fontSize: 15,
        }
    });
    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    <Box style={styles.SignCard}>
                        <Typography variant="h4" style={styles.title}>Welcome Back</Typography>
                        <form style={styles.form}>
                            <Grid item >
                                <TextField
                                    required
                                    id="outlined-start-adornment"
                                    label="E-mail"
                                    variant="outlined"
                                    style={styles.Text}
                                    size='small'
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item >
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Mot de passe"
                                    placeholder='***'
                                    variant="outlined"
                                    type="password"
                                    style={styles.Text}
                                    size='small'
                                />
                            </Grid>
                        </form>
                        <Button variant="contained" style={styles.button}>
                            <Typography variant="h5">Sign In</Typography>
                        </Button>
                        <Typography style={styles.question}>Create Account <Link href='/SignUp' underline="always">Here</Link> </Typography>
                    </Box>
                </Grid>
            </ThemeProvider>

        </>
    )
}

const styles = {
    Text: {
        margin: 15,
        width: 345,
    },
    button: {
        margin: 30,
        alignItems: "center",
        width: 200,
        height: 50,
        background: 'linear-gradient(to right, #FB431A, #F67D35)'
    },
    form: {
        marginTop: 50,
    },
    question: {
        color: '#a8a8a8',
        fontSize: 12,
    },
    title: {
        marginTop: 30,
        color: '#fb431a',
    },
    SignCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 250,
        padding: 20,
        borderRadius: 16,
        backgroundColor: "#e6e6e6",
        boxShadow: "0px 0px 20px 5px grey"
    }
}

export default FormSignUp;