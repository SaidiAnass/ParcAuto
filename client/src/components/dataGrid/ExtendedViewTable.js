import * as React from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Resize,
  Toolbar,
  ColumnChooser,
  Sort,
  ColumnMenu,
  Filter,
  Page,
  Edit,
  Selection,
  ExcelExport,
} from "@syncfusion/ej2-react-grids";
import axios from'axios';
import { useState } from 'react';
import "./grid.css";
import { Box, Grid, Button } from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { makeStyles } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

const ExtendedViewTable = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ['K2D', 'Noto-sans', 'sans-serif'].join(','),
      fontSize: 15,
    },
  })
  const useStyles = makeStyles({
    root: {
      display: 'flex',
    },
  })

  // function CustomPagination() {
  //   // const { state, apiRef } = useGridSlotComponentProps()
  //   const classes = useStyles()

  //   return (
  //     <Pagination
  //       className={classes.root}
  //       color="primary"
  //       count={state.pagination.pageCount}
  //       page={state.pagination.page + 1}
  //       onChange={(event, value) => apiRef.current.setPage(value - 1)}
  //     />
  //   )
  // }

  const columns = [
    { field: "marque", headerName: "marque", width: 80 }, //voiture
    {
      field: "immatriculation",
      headerName: "immatriculation",
      width: 200,
      editable: true,
    },
    {
      field: "bariole",
      headerName: "bariole",
      width: 150,
      editable: true,
    },
    {
      field: "typeVehicule",
      headerName: "typeVehicule",
      width: 100,
      editable: true,
    },
    {
      field: "numeroChassis",
      headerName: "numeroChassis",
      width: 100,
      editable: true,
    },
    {
      field: "dateMiseEnCirculation",
      headerName: "dateMiseEnCirculation",
      width: 80,
    },
    {
      field: "puissanceFiscale",
      headerName: "puissanceFiscale",
      width: 200,
      editable: true,
    },
    {
      field: "couleur",
      headerName: "couleur",
      width: 150,
      editable: true,
    },
    {
      field: "codeRadio",
      headerName: "codeRadio",
      width: 100,
      editable: true,
    },
    {
      field: "refPneus",
      headerName: "refPneus",
      width: 100,
      editable: true,
    },
    {
      field: "echeanceVisiteTechnique",
      headerName: "echeanceVisiteTechnique",
      width: 80,
    },
    {
      field: "echeanceVisiteTechnique",
      headerName: "echeanceVisiteTechnique",
      width: 200,
      editable: true,
    },
    {
      field: "assuranceContractEnCours",
      headerName: "assuranceContractEnCours",
      width: 150,
      editable: true,
    },
    {
      field: "vignette",
      headerName: "vignette",
      width: 100,
      editable: true,
    },
    {
      field: "ww",
      headerName: "ww",
      width: 100,
      editable: true,
    },
    { field: "nombreDeCles", headerName: "nombreDeCles", width: 80 },
    {
      field: "RecoAttrVehicule",
      headerName: "RecoAttrVehicule",
      width: 200,
      editable: true,
    },
    {
      field: "cartesVerte",
      headerName: "cartesVerte",
      width: 150,
      editable: true,
    },
    {
      //Conducteur
      field: "nom",
      headerName: "nom",
      width: 100,
      editable: true,
    },
    {
      field: "prenom",
      headerName: "prenom",
      width: 100,
      editable: true,
    },
    { field: "matricule", headerName: "matricule", width: 80 },
    {
      field: "grade",
      headerName: "grade",
      width: 200,
      editable: true,
    },
    {
      field: "departement",
      headerName: "departement",
      width: 150,
      editable: true,
    },
    {
      field: "filiale",
      headerName: "filiale",
      width: 100,
      editable: true,
    },
    {
      field: "numTagJawaz",
      headerName: "numTagJawaz",
      width: 100,
      editable: true,
    },
    { field: "plafondJawaz", headerName: "plafondJawaz", width: 80 },
    {
      field: "numeroCarteCarburant",
      headerName: "numeroCarteCarburant",
      width: 200,
      editable: true,
    },
    {
      field: "dotationCarteCarburant",
      headerName: "dotationCarteCarburant",
      width: 150,
      editable: true,
    },
    {
      field: "expirationCarteCarburant",
      headerName: "expirationCarteCarburant",
      width: 100,
      editable: true,
    },
    {
      //sous-contract
      field: "prestataire",
      headerName: "prestataire",
      width: 100,
      editable: true,
    },
    { field: "utilisation", headerName: "utilisation", width: 80 },
    {
      field: "dateDebut",
      headerName: "dateDebut",
      width: 200,
      editable: true,
    },
    {
      field: "dateFin",
      headerName: "dateFin",
      width: 150,
      editable: true,
    },
    {
      field: "montant",
      headerName: "montant",
      width: 100,
      editable: true,
    },
    {
      field: "voitureId",
      headerName: "voitureId",
      width: 100,
      editable: true,
    },
    { field: "conducteurId", headerName: "conducteurId", width: 80 },
    {
      field: "numeroParc",
      headerName: "numeroParc",
      width: 200,
      editable: true,
    },
    {
      field: "annee",
      headerName: "annee",
      width: 150,
      editable: true,
    },
    {
      field: "A_O_N",
      headerName: "A_O_N",
      width: 100,
      editable: true,
    },
    {
      field: "numberoContract",
      headerName: "numberoContract",
      width: 100,
      editable: true,
    },
    {
      field: "referenceParcContractLoueur",
      headerName: "referenceParcContractLoueur",
      width: 80,
    },
    {
      field: "duree",
      headerName: "duree",
      width: 200,
      editable: true,
    },
    {
      field: "montantMensuelHT",
      headerName: "montantMensuelHT",
      width: 150,
      editable: true,
    },
    {
      field: "Montant_TTC",
      headerName: "Montant_TTC",
      width: 100,
      editable: true,
    },
    {
      field: "montantMarcheHT",
      headerName: "montantMarcheHT",
      width: 100,
      editable: true,
    },
    {
      field: "montantFranchiseHT",
      headerName: "montantFranchiseHT",
      width: 80,
    },
    {
      field: "remiseAccordee",
      headerName: "remiseAccordee",
      width: 200,
      editable: true,
    },
    {
      field: "KM_limit",
      headerName: "KM_limit",
      width: 150,
      editable: true,
    },
    {
      field: "KM_plus",
      headerName: "KM_plus",
      width: 100,
      editable: true,
    },
    {
      field: "KM_moins",
      headerName: "KM_moins",
      width: 100,
      editable: true,
    },
    {
      field: "echeanceDeCirculation",
      headerName: "echeanceDeCirculation",
      width: 80,
    },
    {
      field: "DatePrevueRestitution",
      headerName: "DatePrevueRestitution",
      width: 200,
      editable: true,
    },
    {
      field: "DateEffectiveRestitution",
      headerName: "DateEffectiveRestitution",
      width: 150,
      editable: true,
    },
    {
      field: "KM_dateRetour",
      headerName: "KM_dateRetour",
      width: 100,
      editable: true,
    },
    {
      field: "contractEchu_enCours",
      headerName: "contractEchu_enCours",
      width: 100,
      editable: true,
    },]

  // const rows = [
  //   {
  //     id: 1,
  //     lastName: 'Snow',
  //     firstName: 'Jon',
  //     age: 35,
  //   },
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  //   { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35 },
  //   { id: 11, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  //   { id: 12, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  //   { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  //   { id: 14, lastName: 'Stark', firstName: 'Arya', age: 16 },
  //   { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //   { id: 16, lastName: 'Melisandre', firstName: null, age: 150 },
  //   { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  // ]

  const [tableData, setTableData] = useState([])


   axios.get('http://localhost:4000/api/contract/').then(res => setTableData(res.data))


  const toolbarOptions = [
    "ColumnChooser",
    "Search",
    "Add",
    "Edit",
    "Delete",
    "Update",
    "Cancel",
    "ExcelExport",
  ];
  const selectionsettings = { persistSelection: true };
  const editSettings = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    newRowPosition: "Top",
  };
  const filterSettings = { type: "CheckBox" };

  // const baseURL = "http://localhost:4000";
  // const data = new DataManager({
  //   adaptor : new UrlAdaptor(),
  //   insertUrl: baseURL + '/api/contract/',
  //   removeUrl: baseURL + '/api/contract/:id',
  //   updateUrl: baseURL + '/api/contract/:id',
  //   url: baseURL + '/api/contract/'
  // })

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item style={styles.table}>
            <Box style={styles.bar}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <ButtonGroup
                    color="primary"
                    aria-label="outlined primary button group"
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      style={styles.buttonSimpleView}
                      startIcon={<FullscreenExitIcon />}
                      onClick={(e) => {
                        e.preventDefault()
                        window.location.href = '/simpleView'
                      }}
                    >
                      <Typography>Simple view</Typography>
                    </Button>

                    <Button
                      variant="contained"
                      color="primary"
                      style={styles.buttonSimpleView}
                      startIcon={<DonutLargeIcon />}
                      onClick={(e) => {
                        e.preventDefault()
                        window.location.href = '/#'
                      }}
                    >
                      <Typography>Charts</Typography>
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    style={styles.singOutbutton}
                    endIcon={<ChevronRightIcon />}
                    onClick={(e) => {
                      e.preventDefault()
                      window.location.href = '/'
                    }}
                  >
                    Sign Out
                  </Button>
                </Grid>
              </Grid>
            </Box>
            <div style={styles.divTable} className="divTable">
              <div className="control-pane" style={styles.syncGrid}>
                <div className="control-section" style={styles.syncGrid}>
                  <GridComponent
                    dataSource={tableData}
                    allowResizing={true}
                    height="100%"
                    gridLines='Both'
                    editSettings={editSettings}
                    selectionSettings={selectionsettings}
                    allowTextWrap={true}
                    showColumnChooser={true}
                    toolbar={toolbarOptions}
                    allowExcelExport={true}
                    allowPaging={true}
                    rowHeight={30}
                    style={styles.syncGrid}
                    pageSettings={{ pageCount: 4, pageSizes: true }}
                    allowSorting={true}
                    allowFiltering={true}
                    showColumnMenu={true}
                    filterSettings={filterSettings}
                  >
                    <ColumnsDirective>
                      <ColumnDirective
                        type="checkbox"
                        maxWidth="60"
                      />

                      <ColumnDirective
                        field="marque"
                        headerName="Marque"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="immatriculation"
                        headerText="Immatriculation"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="bariole"
                        headerText="Bariolé"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="typeVehicule"
                        headerText="Type de vehicule"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="numeroChassis"
                        headerText="Numero de chassis"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="dateMiseEnCirculation"
                        headerName="Date de mise en Circulation"
                        textAlign="Center"
                      ></ColumnDirective>
                      <ColumnDirective
                        field="puissanceFiscale"
                        headerText="Puissance Fiscale"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="couleur"
                        headerText="Couleur"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="codeRadio"
                        headerText="Code Radio"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="refPneus"
                        headerText="Référence pneus"
                        textAlign="Center"
                      />
        
                      <ColumnDirective
                        field="echeanceVisiteTechnique"
                        headerText="Echéance visite technique"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="assuranceContractEnCours"
                        headerText="Assurance contract en cours"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="vignette"
                        headerText="Vignette"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="ww"
                        headerText="WW"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="nombreDeCles"
                        headerName="Nombre de Clés"
                        textAlign="Center"
                      />
                            <ColumnDirective
                        field="cartesVerte"
                        headerText="Cartes verte"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="RecoAttrVehicule"
                        headerText="Reco_Attr_Vehicule"
                        textAlign="Center"
                      />
                
                      <ColumnDirective
                        field="nom"
                        headerText="Nom"
                        minWidth="8"
                        width="100"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="prenom"
                        headerText="Pérnom"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="matricule"
                        headerName="Matricule"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="grade"
                        headerText="Grade"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="departement"
                        headerText="Département"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="filiale"
                        headerText="Filiale"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="numTagJawaz"
                        headerText="Numero Tag Jawaz"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="plafondJawaz"
                        headerName="Plafond Jawaz"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="numeroCarteCarburant"
                        headerText="Numero carte carburant"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="dotationCarteCarburant"
                        headerText="Dotation carte carburant"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="expirationCarteCarburant"
                        headerText="Expiration carte carburant"
                        textAlign="Center"
                      />
                                            <ColumnDirective
                        field="prestataire"
                        headerText="Prestataire"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="utilisation"
                        headerName="Utilisation"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="dateDebut"
                        headerText="Date de debut"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="dateFin"
                        headerText="Date de fin"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="montant"
                        headerText="Montant"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="voitureId"
                        headerText="voitureId"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="conducteurId"
                        headerName="conducteurId"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="numeroParc"
                        headerText="Numero de Parc"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="annee"
                        headerText="Année"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="A_O_N"
                        headerText="A_O_N"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="numberoContract"
                        headerText="Numbero de contract"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="referenceParcContractLoueur"
                        headerName="Référence Parc Contract Loueur"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="duree"
                        headerText="Durée"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="montantMensuelHT"
                        headerText="Montant mensuel HT"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="Montant_TTC"
                        headerText="Montant_TTC"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="montantMarcheHT"
                        headerText="Montant marché  HT"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="montantFranchiseHT"
                        headerName="Montant Franchise HT"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="remiseAccordee"
                        headerText="Remise Accordée"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="KM_limit"
                        headerText="KM_limit"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="KM_plus"
                        headerText="KM +"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="KM_moins"
                        headerText="KM -"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="echeanceDeCirculation"
                        headerText="Echéance de circulation"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="DatePrevueRestitution"
                        headerText="Date revue restitution"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="DateEffectiveRestitution"
                        headerText="Date effective restitution"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="KM_dateRetour"
                        headerText="KM date de retour"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="contractEchu_enCours"
                        headerText="Contract echu/en cours"
                        textAlign="Center"
                      />
                      </ColumnsDirective>
                    <Inject
                      services={[
                        Resize,
                        ExcelExport,
                        Selection,
                        Toolbar,
                        Edit,
                        ColumnChooser,
                        Sort,
                        Page,
                        ColumnMenu,
                        Filter,
                      ]}
                    />
                  </GridComponent>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  )
}

const styles = {
  divTable: {
    height: '100%',
    width: '99.90%',
    overflow: 'auto',
    backgroundColor: 'rgba(235, 235, 235, 2)',
    borderRadius: 8,
  },
  table: {
    height: '91vh',
    width: '99vw',
    margin: 0,
  },
  syncGrid: {
    backgroundColor: "#249bd7",
    height: "100%",
  },
  bar: {
    margin: 20,
    alignItems: 'center',
  },

  button: {
    textTransform: 'capitalize',
    backgroundColor: '#249bd7',
    marginRight: 35,
    marginLeft: 35,
  },
  singOutbutton: {
    backgroundColor: '#249bd7',
    marginLeft: 35,
    borderRadius: 8,
  },
  buttonSimpleView: {
    textTransform: 'capitalize',
  },
}

export default ExtendedViewTable
