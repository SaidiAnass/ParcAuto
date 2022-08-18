import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Grid, Button, Box } from '@material-ui/core';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Link } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';





const FormSignUp = () => {

    const isDisplayed = useMediaQuery("(min-width: 1000px)");


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
                <Grid container direction='row' justifyContent='space-between' style={{ marginLeft: 200 }}>
                    <Grid item >
                        <Box style={styles.SignCard}>
                            <Typography variant="h4" style={styles.title}>Create An Account</Typography>
                            <form style={styles.form}>
                                <Grid item >
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="E-mail"
                                        variant="outlined"
                                        style={styles.Text}
                                        size='small'
                                    />
                                </Grid>
                                <Grid item >
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Grade"
                                        variant="outlined"
                                        style={styles.Text}
                                        size='small'
                                    />
                                </Grid>
                                <Grid item >
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Département"
                                        variant="outlined"
                                        style={styles.Text}
                                        size='small'
                                    />
                                </Grid>
                                <Grid item >
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Matricule"
                                        variant="outlined"
                                        style={styles.Text}
                                        size='small'
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
                                <Grid item >
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Confirmez votre mot de passe"
                                        placeholder='***'
                                        variant="outlined"
                                        type="password"
                                        style={styles.Text}
                                        size='small'
                                    />
                                </Grid>
                            </form>
                            <Button variant="contained" style={styles.button}>
                                <Typography variant="h5">Sign Up</Typography>
                            </Button>

                            <Typography style={styles.question}>Already on ParcAuto? Sign in <Link href="/" underline="always" >Here</Link> </Typography>
                        </Box>
                    </Grid>
                    {isDisplayed &&
                        <Grid item sm={7}>
                            <Box style={styles.illustrationCard}>
                                <img src={require('./img/Beep-Beep-Road-Works.png')} alt='illustration' style={styles.illustrationCar} />
                            </Box>
                        </Grid>
                    }
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
        color: '#fb431a',
    },
    illustrationCard: {
        // display: 'none',
        paddingRight: 90,
        backgroundColor: "transparent",
        maxWidth: 900,
        border: "none",
        boxShadow: "none",
    },
    illustrationCar: {
        marginTop: 150,
        height: 772,
        width: 1153,
    },
    SignCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 120,
        marginLeft: -100,
        padding: 50,
        paddingLeft: 50,
        borderRadius: 16,
        backgroundColor: "#e6e6e6",
        boxShadow: "0px 0px 20px 5px grey"
    }
}

export default FormSignUp;