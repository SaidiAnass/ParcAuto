import { TextField, Button, Grid, Box } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { Formik } from 'formik'
import { PersistFormikValues } from 'formik-persist-values'
import React, { Component } from 'react'
import * as yup from 'yup'

const validationSchema = yup.object({   // for fields validation
  person: yup.string().required('Person is required'),
  matricule: yup.string().required('Matricule is required'),
})

const theme = createTheme({
  // customizing the fonts
  typography: {
    fontFamily: ['DynaPuff', 'Noto-sans', 'sans-serif'].join(','),
    fontSize: 15,
  },
})

export class PersonForm extends Component {
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <Formik
            initialValues={{
              person: '',
              matricule: '',
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
                      Fill up the Person Form
                    </Typography>
                    <div style={styles.fields}>
                      <TextField
                        id="person"
                        name="person"
                        label="Person"
                        variant="outlined"
                        value={formik.values.person}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.person && Boolean(formik.errors.person)
                        }
                        helperText={
                          formik.touched.person && formik.errors.person
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="matricule"
                        name="matricule"
                        label="Matricule"
                        variant="outlined"
                        value={formik.values.matricule}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.matricule &&
                          Boolean(formik.errors.matricule)
                        }
                        helperText={
                          formik.touched.matricule && formik.errors.matricule
                        }
                        style={styles.text}
                      />
                    </div>
                    <div style={styles.fields}>
                      <TextField
                        id="person"
                        name="person"
                        label="Person"
                        variant="outlined"
                        value={formik.values.person}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.person && Boolean(formik.errors.person)
                        }
                        helperText={
                          formik.touched.person && formik.errors.person
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="matricule"
                        name="matricule"
                        label="Matricule"
                        variant="outlined"
                        value={formik.values.matricule}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.matricule &&
                          Boolean(formik.errors.matricule)
                        }
                        helperText={
                          formik.touched.matricule && formik.errors.matricule
                        }
                        style={styles.text}
                      />
                    </div>
                    <div style={styles.div}>
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
                    <PersistFormikValues name="person-form" />
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
  fields: { // div that contains the text fields
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  div: {  //container for the buttons in the bottom of the froms
    display: 'flex',
    width: '99%',
    marginTop: 10,
  },
  boxFrom: { // the white box that contains th form
    width: '60vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250,
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#e6e6e6',
    boxShadow: '0px 0px 50px 3px grey',
  },
}

export default PersonForm
