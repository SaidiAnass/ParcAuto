import { TextField, Button, Grid, Box } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { Formik } from 'formik'
import { PersistFormikValues } from 'formik-persist-values'
import React, { Component } from 'react'
import * as yup from 'yup'

const validationSchema = yup.object({ // for fields validation
  marque: yup.string().required('Marque is required'),
  immatriculation: yup.string().required('Immatriculation is required'),
})

const theme = createTheme({
  // for the typographt
  typography: {
    fontFamily: ['DynaPuff', 'Noto-sans', 'sans-serif'].join(','),
    fontSize: 15,
  },
})

export class CarForm extends Component {
  back = (e) => {
    e.preventDefault()
    this.props.prevStep()
  }
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <Formik
            initialValues={{
              marque: '',
              immatriculation: '',
            }}
            onSubmit={(values) => { //displaying the alert when submitting a form & going to the next form 
              alert(JSON.stringify(values, null, 2))
              this.props.nextStep()
            }}
            validationSchema={validationSchema}
          >
            {(formik) => (
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <form onSubmit={formik.handleSubmit}>
                  <Box style={styles.boxFrom}>
                    <Typography variant="h4" style={styles.title}>
                      Fill up the Car Form
                    </Typography>
                    <div style={styles.fields}>
                      <TextField
                        id="marque"
                        name="marque"
                        label="Marque"
                        variant="outlined"
                        value={formik.values.marque}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.marque && Boolean(formik.errors.marque)
                        }
                        helperText={
                          formik.touched.marque && formik.errors.marque
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="immatriculation"
                        name="immatriculation"
                        label="Immatriculation"
                        variant="outlined"
                        value={formik.values.immatriculation}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.immatriculation &&
                          Boolean(formik.errors.immatriculation)
                        }
                        helperText={
                          formik.touched.immatriculation &&
                          formik.errors.immatriculation
                        }
                        style={styles.text}
                      />
                    </div>
                    <div style={styles.fields}>
                      <TextField
                        id="marque"
                        name="marque"
                        label="Marque"
                        variant="outlined"
                        value={formik.values.marque}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.marque && Boolean(formik.errors.marque)
                        }
                        helperText={
                          formik.touched.marque && formik.errors.marque
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="immatriculation"
                        name="immatriculation"
                        label="Immatriculation"
                        variant="outlined"
                        value={formik.values.immatriculation}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.immatriculation &&
                          Boolean(formik.errors.immatriculation)
                        }
                        helperText={
                          formik.touched.immatriculation &&
                          formik.errors.immatriculation
                        }
                        style={styles.text}
                      />
                    </div>
                    <div style={styles.fields}>
                      <TextField
                        id="marque"
                        name="marque"
                        label="Marque"
                        variant="outlined"
                        value={formik.values.marque}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.marque && Boolean(formik.errors.marque)
                        }
                        helperText={
                          formik.touched.marque && formik.errors.marque
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="immatriculation"
                        name="immatriculation"
                        label="Immatriculation"
                        variant="outlined"
                        value={formik.values.immatriculation}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.immatriculation &&
                          Boolean(formik.errors.immatriculation)
                        }
                        helperText={
                          formik.touched.immatriculation &&
                          formik.errors.immatriculation
                        }
                        style={styles.text}
                      />
                    </div>

                    <div style={styles.div}>
                      <Button
                        onClick={this.back}
                        variant="contained"
                        style={styles.button}
                      >
                        Back
                      </Button>

                      <Button
                        variant="contained"
                        style={styles.button}
                        color="primary"
                        onClick={(e) => {
                          e.preventDefault()
                          window.location.href = '/simpleView'
                        }}
                      >
                        Cancel
                      </Button>

                      <Button
                        type="submit"
                        variant="contained"
                        style={styles.button}
                      >
                        Continue
                      </Button>
                    </div>

                    <PersistFormikValues name="car-form" />
                  </Box>
                </form>
              </Grid>
            )}
          </Formik>
        </ThemeProvider>
      </>
    )
  }
}

const styles = {
  button: {
    margin: 10,
    width: '50%',
    justifyContent: 'center',
    background: 'linear-gradient(to right, #249bd7, #27539e)',
  },
  text: {
    width: '40%',
    margin: 10,
  },
  title: {  // for the title in the form 
    margin: 20,
    color: '#249bd7',
  },
  fields: { //div that contains the text fields
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  div: {   //container for the buttons in the bottom of the froms
    display: 'flex',
    width: '99%',
    marginTop: 10,
  },
  boxFrom: {  // the white box that contains th form
    width: '60vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 250,
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#e6e6e6',
    boxShadow: '0px 0px 50px 3px grey',
  },
}

export default CarForm
