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
import axios from 'axios';
import { useState, useEffect } from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import "./grid.css";
import { Box, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { useNavigate } from "react-router-dom";
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";


const ExtendedViewTable = () => {
  let navigate = useNavigate() //handling log out

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

  //storing the contracts for the data grid
  const [tableData, setTableData] = useState([])

  // getting all contracts
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/contract/")
      .then((res) => {
        setTableData(res.data);
      })
  }, []);


  const toolbarOptions = [
    "ColumnChooser",
    "Search",
    //"Add",
    "Edit",
    // "Delete",
    "Update",
    "Cancel",
    "ExcelExport",
  ];
  const selectionsettings = { persistSelection: true };
  const editSettings = {
    allowEditing: true,
    // allowAdding: true,
    // allowDeleting: true,
    newRowPosition: "Top",
  };
  const filterSettings = { type: "CheckBox" };


  //handling the grid selection
  let grid = null
  const rowSelected = (args) => {
    const selectedrecords = grid.getSelectedRecords();
    console.log(selectedrecords)
    const id = JSON.stringify(selectedrecords)
    var stringify = JSON.parse(id)
    window.updated = stringify[0]
    window.idToDelete = stringify[0]['_id']
    window.numeroContract = stringify[0]['numeroContract']
  };

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
                      startIcon={<AddIcon />}
                      style={styles.CrudButton}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "/addingCar";
                      }}
                    >
                      <Typography>ajouter une allocation</Typography>
                    </Button>

                    //handling the delete operation
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<DeleteIcon />}
                      style={styles.CrudButton}
                      onClick={async (e) => {
                        e.preventDefault();
                        await axios.delete(`http://localhost:4000/api/contract/${window.idToDelete}`);
                        alert(window.numeroContract + " Est supprime")
                        window.location.reload()
                      }}
                    >
                      <Typography>Delete</Typography>
                    </Button>

                    //handling the update operation
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<UpdateIcon />}
                      style={styles.CrudButton}
                      onClick={async (e) => {
                        e.preventDefault();
                        await axios.patch(`http://localhost:4000/api/contract/${window.idToDelete}`, window.updated);
                        alert(window.numeroContract + " updated")
                        window.location.reload()
                      }}
                    >
                      <Typography>Update</Typography>
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    style={styles.singOutbutton}
                    startIcon={<ExitToAppIcon />}
                    onClick={(e) => {
                      //handling the log out 
                      e.preventDefault()
                      localStorage.removeItem("token");
                      alert("Logging Out")
                      navigate("/", { replace: true })
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
                    wrapText={true}
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
                    rowSelected={rowSelected}
                    ref={g => grid = g}
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
                        field="numeroContract"
                        headerText="Numero de contract"
                        textAlign="Center"
                        isPrimaryKey="true"
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

  //customizing the data grid container
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
  //customizing the data grid
  syncGrid: {
    backgroundColor: "#249bd7",
    height: "100%",
  },

  //customizing the box above the data grid
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
  CrudButton: {
    textTransform: "capitalize",
  },
  buttonSimpleView: {
    textTransform: 'capitalize',
    marginRight: 30,
  },
}

export default ExtendedViewTable
