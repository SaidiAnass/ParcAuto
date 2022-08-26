import { TextField, Button, Grid, Box } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { Formik } from 'formik'
import { PersistFormikValues } from 'formik-persist-values'
import React, { Component } from 'react'
import * as yup from 'yup'

const validationSchema = yup.object({  // for fields validation
  prestataire: yup.string().required('Ce Champs est Obligatoire'),
  utilisation: yup.string().required('Ce Champs est Obligatoire'),
  dateDebut: yup.date().required('Ce Champs est Obligatoire'),
  dateFin: yup.date().required('Ce Champs est Obligatoire'),
  montant: yup.number().required('Ce Champs est Obligatoire'),
  voitureId: yup.string().required('Ce Champs est Obligatoire'),
  conducteurId: yup.string().required('Ce Champs est Obligatoire'),
  numeroParc: yup.string().required('Ce Champs est Obligatoire'),
  annee: yup.date().required('Ce Champs est Obligatoire'),
  A_O_N: yup.string().required('Ce Champs est Obligatoire'),
  numberoContract: yup.string().required('Ce Champs est Obligatoire'),
  referenceParcContractLoueur: yup.string().required('Ce Champs est Obligatoire'),
  duree: yup.string().required('Ce Champs est Obligatoire'),
  montantMensuelHT: yup.number().required('Ce Champs est Obligatoire'),
  montantMarcheHT: yup.number().required('Ce Champs est Obligatoire'),
  montantFranchiseHT: yup.number().required('Ce Champs est Obligatoire'),
  remiseAccordee: yup.number().required('Ce Champs est Obligatoire'),
  KM_limit: yup.number().required('Ce Champs est Obligatoire'),
  KM_plus: yup.number().required('Ce Champs est Obligatoire'),
  KM_moins: yup.number().required('Ce Champs est Obligatoire'),
  echeanceDeCirculation: yup.date().required('Ce Champs est Obligatoire'),
  DatePrevueRestitution: yup.date().required('Ce Champs est Obligatoire'),
  DateEffectiveRestitution: yup.date().required('Ce Champs est Obligatoire'),
  KM_dateRetour: yup.number().required('Ce Champs est Obligatoire'),
  contractEchu_enCours: yup.string().required('Ce Champs est Obligatoire'),
  RecoAttrVehicule: yup.string().required('Ce Champs est Obligatoire'),
  cartesVerte: yup.string().required('Ce Champs est Obligatoire'),
  numTagJawaz: yup.string().required('Ce Champs est Obligatoire'),
  plafondJawaz: yup.number().required('Ce Champs est Obligatoire'),
  numeroCarteCarburant: yup.string().required('Ce Champs est Obligatoire'),
  dotationCarteCarburant: yup.number().required('Ce Champs est Obligatoire'),
  expirationCarteCarburant: yup.date().required('Ce Champs est Obligatoire'),
})

const theme = createTheme({
  // customizing fonts
  typography: {
    fontFamily: ['DynaPuff', 'Noto-sans', 'sans-serif'].join(','),
    fontSize: 15,
  },
})

export class ServiceForm extends Component {
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
              prestataire: '',
              utilisation: '',
              dateDebut: '',
              dateFin: '',
              montant: '',
              voitureId: '',
              conducteurId: '',
              numeroParc: '',
              annee: '',
              A_O_N: '',
              numberoContract: '',
              referenceParcContractLoueur: '',
              duree: '',
              montantMensuelHT: '',
              montantMarcheHT: '',
              montantFranchiseHT: '',
              remiseAccordee: '',
              KM_limit: '',
              KM_plus: '',
              KM_moins: '',
              echeanceDeCirculation: '',
              DatePrevueRestitution: '',
              DateEffectiveRestitution: '',
              KM_dateRetour: '',
              contractEchu_enCours: '',
              RecoAttrVehicule: '',
              cartesVerte: '',
              numTagJawaz: '',
              plafondJawaz: '',
              numeroCarteCarburant: '',
              dotationCarteCarburant: '',
              expirationCarteCarburant: '',
            }}
            onSubmit={(values, { resetForm }) => { //displaying the alert when submitting a form & going to the next form 
              alert(JSON.stringify(values, null, 2));
              this.props.nextStep();
              Formik.resetForm()
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
                    <Typography style={{ color: '#9e9e9e' }}>3/3</Typography>
                    <Typography variant="h4" style={styles.title}>
                      Fill up the Service Form
                    </Typography>
                    <div style={styles.fields}>
                      <TextField
                        id="prestataire"
                        name="prestataire"
                        label="Prestataire"
                        variant="outlined"
                        value={formik.values.prestataire}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.prestataire &&
                          Boolean(formik.errors.prestataire)
                        }
                        helperText={
                          formik.touched.prestataire &&
                          formik.errors.prestataire
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="utilisation"
                        name="utilisation"
                        label="Utilisation"
                        variant="outlined"
                        value={formik.values.utilisation}
                        onChange={formik.handleChange}
                        select={true}
                        error={
                          formik.touched.utilisation &&
                          Boolean(formik.errors.utilisation)
                        }
                        helperText={
                          formik.touched.utilisation &&
                          formik.errors.utilisation
                        }
                        style={styles.text}
                      ><option value="fonction">Fonction</option>
                        <option value="service">Service</option></TextField>
                    </div>
                    <div style={styles.fields}>
                      <TextField
                        id="dateDebut"
                        name="dateDebut"
                        label="Date de debut"
                        variant="outlined"
                        value={formik.values.dateDebut}
                        onChange={formik.handleChange}
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        error={
                          formik.touched.dateDebut &&
                          Boolean(formik.errors.dateDebut)
                        }
                        helperText={
                          formik.touched.dateDebut &&
                          formik.errors.dateDebut
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="dateFin"
                        name="dateFin"
                        label="Date de fin"
                        variant="outlined"
                        value={formik.values.dateFin}
                        onChange={formik.handleChange}
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        error={
                          formik.touched.dateFin &&
                          Boolean(formik.errors.dateFin)
                        }
                        helperText={
                          formik.touched.dateFin &&
                          formik.errors.dateFin
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="montant"
                        name="montant"
                        label="Montant"
                        variant="outlined"
                        value={formik.values.montant}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.montant &&
                          Boolean(formik.errors.montant)
                        }
                        helperText={
                          formik.touched.montant &&
                          formik.errors.montant
                        }
                        style={styles.text}
                      />
                    </div>
                    <div style={styles.fields}>
                      <TextField
                        id="voitureId"
                        name="voitureId"
                        label="Voiture_Id"
                        variant="outlined"
                        value={formik.values.voitureId}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.voitureId &&
                          Boolean(formik.errors.voitureId)
                        }
                        helperText={
                          formik.touched.voitureId &&
                          formik.errors.voitureId
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="conducteurId"
                        name="conducteurId"
                        label="Conducteur_Id"
                        variant="outlined"
                        value={formik.values.conducteurId}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.conducteurId &&
                          Boolean(formik.errors.conducteurId)
                        }
                        helperText={
                          formik.touched.conducteurId &&
                          formik.errors.conducteurId
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="numeroParc"
                        name="numeroParc"
                        label="Numero de Parc"
                        variant="outlined"
                        value={formik.values.numeroParc}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.numeroParc &&
                          Boolean(formik.errors.numeroParc)
                        }
                        helperText={
                          formik.touched.numeroParc &&
                          formik.errors.numeroParc
                        }
                        style={styles.text}
                      />
                    </div>
                    <div style={styles.fields}>
                      <TextField
                        id="annee"
                        name="annee"
                        label="Année"
                        variant="outlined"
                        value={formik.values.annee}
                        onChange={formik.handleChange}
                        type="number"
                        error={
                          formik.touched.annee &&
                          Boolean(formik.errors.annee)
                        }
                        helperText={
                          formik.touched.annee &&
                          formik.errors.annee
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="A_O_N"
                        name="A_O_N"
                        label="A_O_n"
                        variant="outlined"
                        value={formik.values.A_O_N}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.A_O_N &&
                          Boolean(formik.errors.A_O_N)
                        }
                        helperText={
                          formik.touched.A_O_N &&
                          formik.errors.A_O_N
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="numberoContract"
                        name="numberoContract"
                        label="Numbero de contract"
                        variant="outlined"
                        value={formik.values.numberoContract}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.numberoContract &&
                          Boolean(formik.errors.numberoContract)
                        }
                        helperText={
                          formik.touched.numberoContract &&
                          formik.errors.numberoContract
                        }
                        style={styles.text}
                      />
                    </div>
                    <div style={styles.fields}>
                      <TextField
                        id="referenceParcContractLoueur"
                        name="referenceParcContractLoueur"
                        label="reference Parc Contract Loueur"
                        variant="outlined"
                        value={formik.values.referenceParcContractLoueur}
                        onChange={formik.handleChange}
                        InputLabelProps={{ shrink: true }}
                        error={
                          formik.touched.referenceParcContractLoueur &&
                          Boolean(formik.errors.referenceParcContractLoueur)
                        }
                        helperText={
                          formik.touched.referenceParcContractLoueur &&
                          formik.errors.referenceParcContractLoueur
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="duree"
                        name="duree"
                        label="Durée"
                        variant="outlined"
                        value={formik.values.duree}
                        onChange={formik.handleChange}
                        type="number"
                        error={
                          formik.touched.duree &&
                          Boolean(formik.errors.duree)
                        }
                        helperText={
                          formik.touched.duree &&
                          formik.errors.duree
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="montantMensuelHT"
                        name="montantMensuelHT"
                        label="Montant mensuel HT"
                        variant="outlined"
                        value={formik.values.montantMensuelHT}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.montantMensuelHT &&
                          Boolean(formik.errors.montantMensuelHT)
                        }
                        helperText={
                          formik.touched.montantMensuelHT &&
                          formik.errors.montantMensuelHT
                        }
                        style={styles.text}
                      />
                    </div>
                    <div style={styles.fields}>
                      <TextField
                        id="montantMarcheHT"
                        name="montantMarcheHT"
                        label="Montant marché  HT"
                        variant="outlined"
                        value={formik.values.montantMarcheHT}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.montantMarcheHT &&
                          Boolean(formik.errors.montantMarcheHT)
                        }
                        helperText={
                          formik.touched.montantMarcheHT &&
                          formik.errors.montantMarcheHT
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="montantFranchiseHT"
                        name="montantFranchiseHT"
                        label="Montant Franchise HT"
                        variant="outlined"
                        value={formik.values.montantFranchiseHT}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.montantFranchiseHT &&
                          Boolean(formik.errors.montantFranchiseHT)
                        }
                        helperText={
                          formik.touched.montantFranchiseHT &&
                          formik.errors.montantFranchiseHT
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="remiseAccordee"
                        name="remiseAccordee"
                        label="Remise Accordée"
                        variant="outlined"
                        value={formik.values.remiseAccordee}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.remiseAccordee &&
                          Boolean(formik.errors.remiseAccordee)
                        }
                        helperText={
                          formik.touched.remiseAccordee &&
                          formik.errors.remiseAccordee
                        }
                        style={styles.text}
                      />
                    </div>
                    <div style={styles.fields}>
                      <TextField
                        id="KM_limit"
                        name="KM_limit"
                        label="KM_limit"
                        variant="outlined"
                        value={formik.values.KM_limit}
                        onChange={formik.handleChange}
                        type="number"
                        error={
                          formik.touched.KM_limit &&
                          Boolean(formik.errors.KM_limit)
                        }
                        helperText={
                          formik.touched.KM_limit &&
                          formik.errors.KM_limit
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="KM_plus"
                        name="KM_plus"
                        label="KM +"
                        variant="outlined"
                        value={formik.values.KM_plus}
                        onChange={formik.handleChange}
                        type="number"
                        error={
                          formik.touched.KM_plus &&
                          Boolean(formik.errors.KM_plus)
                        }
                        helperText={
                          formik.touched.KM_plus &&
                          formik.errors.KM_plus
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="KM_moins"
                        name="KM_moins"
                        label="KM -"
                        variant="outlined"
                        value={formik.values.KM_moins}
                        onChange={formik.handleChange}
                        type="number"
                        error={
                          formik.touched.KM_moins &&
                          Boolean(formik.errors.KM_moins)
                        }
                        helperText={
                          formik.touched.KM_moins &&
                          formik.errors.KM_moins
                        }
                        style={styles.text}
                      />
                    </div>
                    <div style={styles.fields}>
                      <TextField
                        id="echeanceDeCirculation"
                        name="echeanceDeCirculation"
                        label="Echéance de circulation"
                        variant="outlined"
                        value={formik.values.echeanceDeCirculation}
                        onChange={formik.handleChange}
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        error={
                          formik.touched.echeanceDeCirculation &&
                          Boolean(formik.errors.echeanceDeCirculation)
                        }
                        helperText={
                          formik.touched.echeanceDeCirculation &&
                          formik.errors.echeanceDeCirculation
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="DatePrevueRestitution"
                        name="DatePrevueRestitution"
                        label="Date revue restitution"
                        variant="outlined"
                        value={formik.values.DatePrevueRestitution}
                        onChange={formik.handleChange}
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        error={
                          formik.touched.DatePrevueRestitution &&
                          Boolean(formik.errors.DatePrevueRestitution)
                        }
                        helperText={
                          formik.touched.DatePrevueRestitution &&
                          formik.errors.DatePrevueRestitution
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="DateEffectiveRestitution"
                        name="DateEffectiveRestitution"
                        label="Date effective restitution"
                        variant="outlined"
                        value={formik.values.DateEffectiveRestitution}
                        onChange={formik.handleChange}
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        error={
                          formik.touched.DateEffectiveRestitution &&
                          Boolean(formik.errors.DateEffectiveRestitution)
                        }
                        helperText={
                          formik.touched.DateEffectiveRestitution &&
                          formik.errors.DateEffectiveRestitution
                        }
                        style={styles.text}
                      />
                    </div>
                    <div style={styles.fields}>
                      <TextField
                        id="KM_dateRetour"
                        name="KM_dateRetour"
                        label="KM date de retour"
                        variant="outlined"
                        value={formik.values.KM_dateRetour}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.KM_dateRetour &&
                          Boolean(formik.errors.KM_dateRetour)
                        }
                        helperText={
                          formik.touched.KM_dateRetour &&
                          formik.errors.KM_dateRetour
                        }
                        style={styles.text}
                      />
                      <TextField
                        id="contractEchu_enCours"
                        name="contractEchu_enCours"
                        label="Contract echu/en cours"
                        variant="outlined"
                        value={formik.values.contractEchu_enCours}
                        onChange={formik.handleChange}
                        select={true}
                        error={
                          formik.touched.contractEchu_enCours &&
                          Boolean(formik.errors.contractEchu_enCours)
                        }
                        helperText={
                          formik.touched.contractEchu_enCours &&
                          formik.errors.contractEchu_enCours
                        }
                        style={styles.text}
                      >      <option value="enCours">en Cours</option>
                        <option value="echu">Echu</option></TextField>
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
                    <div style={styles.fields}>
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
                      <TextField
                        id="numTagJawaz"
                        name="numTagJawaz"
                        label="Numero Tag Jawaz"
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
                        label="Numero carte carburant"
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
                        Reset
                      </Button>
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
                        Confirm & Continue
                      </Button>
                    </div>
                    <PersistFormikValues storage='sessionStorage' name="service-form" />
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
  title: {   // for the title in the form 
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
  boxFrom: {  // the white box that contains th form
    width: '80vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    minWidth: '900px',
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#e6e6e6',
    boxShadow: '0px 0px 50px 3px grey',
  },
}

export default ServiceForm
