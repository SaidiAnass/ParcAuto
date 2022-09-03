import { TextField, Button, Grid, Box } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { Formik } from 'formik'
import { PersistFormikValues } from 'formik-persist-values'
import React from 'react'
import * as yup from 'yup'
import swal from 'sweetalert';


const validationSchema = yup.object({   // for fields validation
  nom: yup.string().required('Ce Champ est obligatoire'),
  prenom: yup.string().required('Ce Champ est obligatoire'),
  matricule: yup.string().required('Ce Champ est obligatoire'),
  grade: yup.string(),
  departement: yup.string(),
  filiale: yup.string().required('Ce Champ est obligatoire'),
  numTagJawaz: yup.string().required('Ce Champs est Obligatoire'),
  plafondJawaz: yup.number(),
  numeroCarteCarburant: yup.string().required('Ce Champs est Obligatoire'),
  dotationCarteCarburant: yup.number(),
  expirationCarteCarburant: yup.date(),
})

const theme = createTheme({
  // customizing the fonts
  typography: {
    fontFamily: ['DynaPuff', 'Noto-sans', 'sans-serif'].join(','),
    fontSize: 15,
  },
})

const PersonForm = (props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Formik
          initialValues={{
            nom: '',
            prenom: '',
            matricule: '',
            grade: '',
            departement: '',
            filiale: '',
            numTagJawaz: '',
            plafondJawaz: '',
            numeroCarteCarburant: '',
            dotationCarteCarburant: '',
            expirationCarteCarburant: '',
          }}
          onSubmit={async (values) => { //displaying the alert when submitting a form & going to the next form 
            swal({
              text: JSON.stringify(values, null, 2),
            }).then(() => {
              props.nextStep()
            })
            await props.updateContractFields(values)
            console.log(props.contractFields)
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
                  <Typography style={{ color: '#9e9e9e' }}>1/3</Typography>
                  <Typography variant="h4" style={styles.title}>
                    Les Infromation du Conducteur
                  </Typography>
                  <div style={styles.fields}>
                    <TextField
                      id="nom"
                      name="nom"
                      label="Nom *"
                      variant="outlined"
                      value={formik.values.nom}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.nom &&
                        Boolean(formik.errors.nom)
                      }
                      helperText={
                        formik.touched.nom && formik.errors.nom
                      }
                      style={styles.text}
                    />
                    <TextField
                      id="prenom"
                      name="prenom"
                      label="Pérnom *"
                      variant="outlined"
                      value={formik.values.prenom}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.prenom && Boolean(formik.errors.prenom)
                      }
                      helperText={
                        formik.touched.prenom && formik.errors.prenom
                      }
                      style={styles.text}
                    />
                  </div>
                  <div style={styles.fields}>
                    <TextField
                      id="matricule"
                      name="matricule"
                      label="Matricule *"
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
                    <TextField
                      id="grade"
                      name="grade"
                      label="Grade"
                      variant="outlined"
                      value={formik.values.grade}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.grade &&
                        Boolean(formik.errors.grade)
                      }
                      helperText={
                        formik.touched.grade && formik.errors.grade
                      }
                      style={styles.text}
                    />
                  </div>
                  <div style={styles.fields}>
                    <TextField
                      id="departement"
                      name="departement"
                      label="Département"
                      variant="outlined"
                      value={formik.values.departement}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.departement &&
                        Boolean(formik.errors.departement)
                      }
                      helperText={
                        formik.touched.departement && formik.errors.departement
                      }
                      style={styles.text}
                    />
                    <TextField
                      id="filiale"
                      name="filiale"
                      label="Filiale *"
                      variant="outlined"
                      value={formik.values.filiale}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.filiale &&
                        Boolean(formik.errors.filiale)
                      }
                      helperText={
                        formik.touched.filiale && formik.errors.filiale
                      }
                      style={styles.text}
                    />
                  </div>
                  <div style={styles.fields}>
                    <TextField
                      id="numTagJawaz"
                      name="numTagJawaz"
                      label="Numero Tag Jawaz *"
                      variant="outlined"
                      value={formik.values.numTagJawaz}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.numTagJawaz &&
                        Boolean(formik.errors.numTagJawaz)
                      }
                      helperText={
                        formik.touched.numTagJawaz &&
                        formik.errors.numTagJawaz
                      }
                      style={styles.text}
                    />
                    <TextField
                      id="plafondJawaz"
                      name="plafondJawaz"
                      label="Plafond Jawaz"
                      variant="outlined"
                      value={formik.values.plafondJawaz}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.plafondJawaz &&
                        Boolean(formik.errors.plafondJawaz)
                      }
                      helperText={
                        formik.touched.plafondJawaz &&
                        formik.errors.plafondJawaz
                      }
                      style={styles.text}
                    />
                  </div>
                  <div style={styles.fields}>
                    <TextField
                      id="numeroCarteCarburant"
                      name="numeroCarteCarburant"
                      label="Numero carte carburant *"
                      variant="outlined"
                      value={formik.values.numeroCarteCarburant}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.numeroCarteCarburant &&
                        Boolean(formik.errors.numeroCarteCarburant)
                      }
                      helperText={
                        formik.touched.numeroCarteCarburant &&
                        formik.errors.numeroCarteCarburant
                      }
                      style={styles.text}
                    />
                    <TextField
                      id="dotationCarteCarburant"
                      name="dotationCarteCarburant"
                      label="Dotation carte carburant"
                      variant="outlined"
                      value={formik.values.dotationCarteCarburant}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.dotationCarteCarburant &&
                        Boolean(formik.errors.dotationCarteCarburant)
                      }
                      helperText={
                        formik.touched.dotationCarteCarburant &&
                        formik.errors.dotationCarteCarburant
                      }
                      style={styles.text}
                    />
                  </div>
                  <div style={styles.fields}>
                    <TextField
                      id="expirationCarteCarburant"
                      name="expirationCarteCarburant"
                      label="Expiration carte carburant"
                      variant="outlined"
                      value={formik.values.expirationCarteCarburant}
                      onChange={formik.handleChange}
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      error={
                        formik.touched.expirationCarteCarburant &&
                        Boolean(formik.errors.expirationCarteCarburant)
                      }
                      helperText={
                        formik.touched.expirationCarteCarburant &&
                        formik.errors.expirationCarteCarburant
                      }
                      style={styles.text}
                    />
                  </div>
                  <Typography style={{ color: '#9e9e9e', marginTop: 20 }}>* Obligatoire</Typography>
                  <div style={styles.div}>
                    <Button
                      type="reset"
                      variant="contained"
                      style={styles.button}
                      onClick={e => formik.resetForm()}
                    >
                      Réinitialiser
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
                      Annuler
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      style={styles.button}
                    >
                      Continuer
                    </Button>
                  </div>
                  <PersistFormikValues storage='sessionStorage' name="person-form" />
                </Box>
              </form>
            </Grid>
          )}
        </Formik>
      </ThemeProvider>
    </>
  )

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
    marginTop: 130,
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#e6e6e6',
    boxShadow: '0px 0px 50px 3px grey',
  },
}

export default PersonForm
