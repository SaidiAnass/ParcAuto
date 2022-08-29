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
  typeVehicule: yup.string(),
  bariole: yup.boolean(),
  numeroChassis: yup.string().required('Ce Champs est Obligatoire'),
  dateMiseEnCirculation: yup.date(),
  puissanceFiscale: yup.number(),
  couleur: yup.string(),
  codeRadio: yup.string(),
  refPneus: yup.string(),
  echeanceVisiteTechnique: yup.date().required('Ce Champs est Obligatoire'),
  assuranceContractEnCours: yup.date().required('Ce Champs est Obligatoire'),
  vignette: yup.date().required('Ce Champs est Obligatoire'),
  ww: yup.string().required('Ce Champs est Obligatoire'),
  nombreDeCles: yup.number().required('Ce Champs est Obligatoire'),
  RecoAttrVehicule: yup.string(),
  cartesVerte: yup.string(),

})

const theme = createTheme({
  // for the typographt
  typography: {
    fontFamily: ['DynaPuff', 'Noto-sans', 'sans-serif'].join(','),
    fontSize: 15,
  },
})

const CarForm = (props) => {
  const back = (e) => {
    e.preventDefault()
    props.prevStep()
  }
    return (
      <>
        <ThemeProvider theme={theme}>
          <Formik
            initialValues={{
              marque: '',
              immatriculation: '',
              typeVehicule: '',
              bariole: '',
              numeroChassis: '',
              dateMiseEnCirculation: '',
              puissanceFiscale: '',
              couleur: '',
              codeRadio: '',
              refPneus: '',
              echeanceVisiteTechnique: '',
              assuranceContractEnCours: '',
              vignette: '',
              ww: '',
              nombreDeCles: '',
              RecoAttrVehicule: '',
              cartesVerte: '',
            }}
            onSubmit={(values) => { //displaying the alert when submitting a form & going to the next form 
              alert(JSON.stringify(values, null, 2))
              // this.props.updateConstactFields(values)
              props.nextStep()
              // console.log(this.props.contract)

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
                    <Typography style={{ color: '#9e9e9e' }}>2/3</Typography>
                    <Typography variant="h4" style={styles.title}>
                      Fill up the Car Form
                    </Typography>
                    <div style={styles.fields}>
                      <TextField
                        id="marque"
                        name="marque"
                        label="Marque *"
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
                        label="Immatriculation *"
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
                        id="typeVehicule"
                        name="typeVehicule"
                        label="Type de vehicule"
                        variant="outlined"
                        value={formik.values.typeVehicule}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.typeVehicule && Boolean(formik.errors.typeVehicule)
                        }
                        helperText={
                          formik.touched.typeVehicule && formik.errors.typeVehicule
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="bariole"
                        name="bariole"
                        label="Bariolé"
                        variant="outlined"
                        select={true}
                        value={formik.values.bariole}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.bariole &&
                          Boolean(formik.errors.bariole)
                        }
                        helperText={
                          formik.touched.bariole &&
                          formik.errors.bariole
                        }
                        style={styles.text}
                      >
                        <option value="false">Non</option>
                        <option value="true">Oui</option>
                      </TextField>
                    </div>
                    <div style={styles.fields}>
                      <TextField
                        id="numeroChassis"
                        name="numeroChassis"
                        label="Numero de chassis *"
                        variant="outlined"
                        value={formik.values.numeroChassis}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.numeroChassis && Boolean(formik.errors.numeroChassis)
                        }
                        helperText={
                          formik.touched.numeroChassis && formik.errors.numeroChassis
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="dateMiseEnCirculation"
                        name="dateMiseEnCirculation"
                        label="Date de mise en Circulation"
                        variant="outlined"
                        value={formik.values.dateMiseEnCirculation}
                        onChange={formik.handleChange}
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        error={
                          formik.touched.dateMiseEnCirculation &&
                          Boolean(formik.errors.dateMiseEnCirculation)
                        }
                        helperText={
                          formik.touched.dateMiseEnCirculation &&
                          formik.errors.dateMiseEnCirculation
                        }
                        style={styles.text}
                      />
                    </div>
                    <div style={styles.fields}>
                      <TextField
                        id="puissanceFiscale"
                        name="puissanceFiscale"
                        label="Puissance Fiscale"
                        variant="outlined"
                        type="number"
                        value={formik.values.puissanceFiscale}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.puissanceFiscale && Boolean(formik.errors.puissanceFiscale)
                        }
                        helperText={
                          formik.touched.puissanceFiscale && formik.errors.puissanceFiscale
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="couleur"
                        name="couleur"
                        label="Couleur"
                        variant="outlined"
                        value={formik.values.couleur}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.couleur &&
                          Boolean(formik.errors.couleur)
                        }
                        helperText={
                          formik.touched.couleur &&
                          formik.errors.couleur
                        }
                        style={styles.text}
                      />
                    </div>
                    <div style={styles.fields}>
                      <TextField
                        id="codeRadio"
                        name="codeRadio"
                        label="Code radio"
                        variant="outlined"
                        value={formik.values.codeRadio}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.codeRadio && Boolean(formik.errors.codeRadio)
                        }
                        helperText={
                          formik.touched.codeRadio && formik.errors.codeRadio
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="refPneus"
                        name="refPneus"
                        label="Référence pneus"
                        variant="outlined"
                        value={formik.values.refPneus}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.refPneus &&
                          Boolean(formik.errors.refPneus)
                        }
                        helperText={
                          formik.touched.refPneus &&
                          formik.errors.refPneus
                        }
                        style={styles.text}
                      />
                    </div>
                    <div style={styles.fields}>
                      <TextField
                        id="echeanceVisiteTechnique"
                        name="echeanceVisiteTechnique"
                        label="Echéance visite technique *"
                        variant="outlined"
                        value={formik.values.echeanceVisiteTechnique}
                        onChange={formik.handleChange}
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        error={
                          formik.touched.echeanceVisiteTechnique && Boolean(formik.errors.echeanceVisiteTechnique)
                        }
                        helperText={
                          formik.touched.echeanceVisiteTechnique && formik.errors.echeanceVisiteTechnique
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="assuranceContractEnCours"
                        name="assuranceContractEnCours"
                        label="Assurance contract en cours *"
                        variant="outlined"
                        value={formik.values.assuranceContractEnCours}
                        onChange={formik.handleChange}
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        error={
                          formik.touched.assuranceContractEnCours &&
                          Boolean(formik.errors.assuranceContractEnCours)
                        }
                        helperText={
                          formik.touched.assuranceContractEnCours &&
                          formik.errors.assuranceContractEnCours
                        }
                        style={styles.text}
                      />
                    </div>
                    <div style={styles.fields}>
                      <TextField
                        id="vignette"
                        name="vignette"
                        label="Vignette *"
                        variant="outlined"
                        value={formik.values.vignette}
                        onChange={formik.handleChange}
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        error={
                          formik.touched.vignette && Boolean(formik.errors.vignette)
                        }
                        helperText={
                          formik.touched.vignette && formik.errors.vignette
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="ww"
                        name="ww"
                        label="WW *"
                        variant="outlined"
                        value={formik.values.ww}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.ww &&
                          Boolean(formik.errors.ww)
                        }
                        helperText={
                          formik.touched.ww &&
                          formik.errors.ww
                        }
                        style={styles.text}
                      />
                    </div>
                    <div style={styles.fields}>
                      <TextField
                        id="nombreDeCles"
                        name="nombreDeCles"
                        label="Nombre de Clés *"
                        variant="outlined"
                        value={formik.values.nombreDeCles}
                        onChange={formik.handleChange}
                        type="number"
                        error={
                          formik.touched.nombreDeCles && Boolean(formik.errors.nombreDeCles)
                        }
                        helperText={
                          formik.touched.nombreDeCles && formik.errors.nombreDeCles
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="cartesVerte"
                        name="cartesVerte"
                        label="Cartes verte"
                        variant="outlined"
                        value={formik.values.cartesVerte}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.cartesVerte &&
                          Boolean(formik.errors.cartesVerte)
                        }
                        helperText={
                          formik.touched.cartesVerte &&
                          formik.errors.cartesVerte
                        }
                        style={styles.text}
                      />
                    </div>
                    <div style={styles.fields}>                    
                    <TextField
                        id="RecoAttrVehicule"
                        name="RecoAttrVehicule"
                        label="Reco_Attr_Vehicule"
                        variant="outlined"
                        value={formik.values.RecoAttrVehicule}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.RecoAttrVehicule &&
                          Boolean(formik.errors.RecoAttrVehicule)
                        }
                        helperText={
                          formik.touched.RecoAttrVehicule &&
                          formik.errors.RecoAttrVehicule
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
                        Reset
                      </Button>
                      <Button
                        onClick={back}
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

                    <PersistFormikValues storage='sessionStorage' name="car-form" />
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
    marginTop: 8,
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#e6e6e6',
    boxShadow: '0px 0px 50px 3px grey',
  },
}

export default CarForm
