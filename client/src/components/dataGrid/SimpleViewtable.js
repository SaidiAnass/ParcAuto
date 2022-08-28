import * as React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import axios from "axios";
import { Box, Grid, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { makeStyles } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
// import DeleteIcon from '@material-ui/icons/Delete'
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useState, useEffect } from "react";
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
import "./grid.css";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

const SimpleViewtable = () => {
  const theme = createTheme({
    // custoizing the fonts
    typography: {
      fontFamily: ["K2D", "Noto-sans", "sans-serif"].join(","),
      fontSize: 15,
    },
  });

  // const columns = [
  //   { field: "marque", headerName: "marque", width: 80 }, //voiture
  //   {
  //     field: "immatriculation",
  //     headerName: "immatriculation",
  //     width: 200,
  //     editable: true,
  //   },
  //   {
  //     field: "bariole",
  //     headerName: "bariole",
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: "typeVehicule",
  //     headerName: "typeVehicule",
  //     width: 100,
  //     editable: true,
  //   },
  //   {
  //     field: "numeroChassis",
  //     headerName: "numeroChassis",
  //     width: 100,
  //     editable: true,
  //   },
  //   {
  //     field: "dateMiseEnCirculation",
  //     headerName: "dateMiseEnCirculation",
  //     width: 80,
  //   },
  //   {
  //     field: "puissanceFiscale",
  //     headerName: "puissanceFiscale",
  //     width: 200,
  //     editable: true,
  //   },
  //   {
  //     field: "couleur",
  //     headerName: "couleur",
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: "codeRadio",
  //     headerName: "codeRadio",
  //     width: 100,
  //     editable: true,
  //   },
  //   {
  //     field: "refPneus",
  //     headerName: "refPneus",
  //     width: 100,
  //     editable: true,
  //   },
  //   {
  //     field: "echeanceVisiteTechnique",
  //     headerName: "echeanceVisiteTechnique",
  //     width: 80,
  //   },
  //   {
  //     field: "echeanceVisiteTechnique",
  //     headerName: "echeanceVisiteTechnique",
  //     width: 200,
  //     editable: true,
  //   },
  //   {
  //     field: "assuranceContractEnCours",
  //     headerName: "assuranceContractEnCours",
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: "vignette",
  //     headerName: "vignette",
  //     width: 100,
  //     editable: true,
  //   },
  //   {
  //     field: "ww",
  //     headerName: "ww",
  //     width: 100,
  //     editable: true,
  //   },
  //   { field: "nombreDeCles", headerName: "nombreDeCles", width: 80 },
  //   {
  //     field: "RecoAttrVehicule",
  //     headerName: "RecoAttrVehicule",
  //     width: 200,
  //     editable: true,
  //   },
  //   {
  //     field: "cartesVerte",
  //     headerName: "cartesVerte",
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     //Conducteur
  //     field: "nom",
  //     headerName: "nom",
  //     width: 100,
  //     editable: true,
  //   },
  //   {
  //     field: "prenom",
  //     headerName: "prenom",
  //     width: 100,
  //     editable: true,
  //   },
  //   { field: "matricule", headerName: "matricule", width: 80 },
  //   {
  //     field: "grade",
  //     headerName: "grade",
  //     width: 200,
  //     editable: true,
  //   },
  //   {
  //     field: "departement",
  //     headerName: "departement",
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: "filiale",
  //     headerName: "filiale",
  //     width: 100,
  //     editable: true,
  //   },
  //   {
  //     field: "numTagJawaz",
  //     headerName: "numTagJawaz",
  //     width: 100,
  //     editable: true,
  //   },
  //   { field: "plafondJawaz", headerName: "plafondJawaz", width: 80 },
  //   {
  //     field: "numeroCarteCarburant",
  //     headerName: "numeroCarteCarburant",
  //     width: 200,
  //     editable: true,
  //   },
  //   {
  //     field: "dotationCarteCarburant",
  //     headerName: "dotationCarteCarburant",
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: "expirationCarteCarburant",
  //     headerName: "expirationCarteCarburant",
  //     width: 100,
  //     editable: true,
  //   },
  //   {
  //     //sous-contract
  //     field: "prestataire",
  //     headerName: "prestataire",
  //     width: 100,
  //     editable: true,
  //   },
  //   { field: "utilisation", headerName: "utilisation", width: 80 },
  //   {
  //     field: "dateDebut",
  //     headerName: "dateDebut",
  //     width: 200,
  //     editable: true,
  //   },
  //   {
  //     field: "dateFin",
  //     headerName: "dateFin",
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: "montant",
  //     headerName: "montant",
  //     width: 100,
  //     editable: true,
  //   },
  //   {
  //     field: "voitureId",
  //     headerName: "voitureId",
  //     width: 100,
  //     editable: true,
  //   },
  //   { field: "conducteurId", headerName: "conducteurId", width: 80 },
  //   {
  //     field: "numeroParc",
  //     headerName: "numeroParc",
  //     width: 200,
  //     editable: true,
  //   },
  //   {
  //     field: "annee",
  //     headerName: "annee",
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: "A_O_N",
  //     headerName: "A_O_N",
  //     width: 100,
  //     editable: true,
  //   },
  //   {
  //     field: "numberoContract",
  //     headerName: "numberoContract",
  //     width: 100,
  //     editable: true,
  //   },
  //   {
  //     field: "referenceParcContractLoueur",
  //     headerName: "referenceParcContractLoueur",
  //     width: 80,
  //   },
  //   {
  //     field: "duree",
  //     headerName: "duree",
  //     width: 200,
  //     editable: true,
  //   },
  //   {
  //     field: "montantMensuelHT",
  //     headerName: "montantMensuelHT",
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: "Montant_TTC",
  //     headerName: "Montant_TTC",
  //     width: 100,
  //     editable: true,
  //   },
  //   {
  //     field: "montantMarcheHT",
  //     headerName: "montantMarcheHT",
  //     width: 100,
  //     editable: true,
  //   },
  //   {
  //     field: "montantFranchiseHT",
  //     headerName: "montantFranchiseHT",
  //     width: 80,
  //   },
  //   {
  //     field: "remiseAccordee",
  //     headerName: "remiseAccordee",
  //     width: 200,
  //     editable: true,
  //   },
  //   {
  //     field: "KM_limit",
  //     headerName: "KM_limit",
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: "KM_plus",
  //     headerName: "KM_plus",
  //     width: 100,
  //     editable: true,
  //   },
  //   {
  //     field: "KM_moins",
  //     headerName: "KM_moins",
  //     width: 100,
  //     editable: true,
  //   },
  //   {
  //     field: "echeanceDeCirculation",
  //     headerName: "echeanceDeCirculation",
  //     width: 80,
  //   },
  //   {
  //     field: "DatePrevueRestitution",
  //     headerName: "DatePrevueRestitution",
  //     width: 200,
  //     editable: true,
  //   },
  //   {
  //     field: "DateEffectiveRestitution",
  //     headerName: "DateEffectiveRestitution",
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: "KM_dateRetour",
  //     headerName: "KM_dateRetour",
  //     width: 100,
  //     editable: true,
  //   },
  //   {
  //     field: "contractEchu_enCours",
  //     headerName: "contractEchu_enCours",
  //     width: 100,
  //     editable: true,
  //   },

    // {
    //   field: 'actions',
    //   type: 'actions',
    //   width: 80,
    //   getActions: (params) => [
    //     <GridActionsCellItem
    //       icon={<DeleteIcon />}
    //       label="Delete"
    //     //onClick={deleteUser(params.id)}
    //     />
    //   ],
    // },
    // {
    //   field: 'age',
    //   headerName: 'Age',
    //   //type: 'number',
    //   width: 110,
    //   editable: true,
    // },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 100,
    //   valueGetter: (params) =>
    //     `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
    //     }`,
    // },
  // ];

  const [tableData, setTableData] = useState([])

  // useEffect(() => {
  //   fetch("http://localhost:4000/api/contract/")
  //     .then((data) => data.json())
  //     .then((data) => setTableData(data))
  // }, [])

   axios.get('http://localhost:4000/api/contract/').then(res => setTableData(res.data))

  // .catch(function (error) {const data = await
  //   if(error.response){
  //     alert(error.response.data.error)
  //   }
  //   else{
  //     console.log("Success")
  //     alert("Success")
  //   }
  // })

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

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Box style={styles.addCarAndLogo}>
              <img
                src={require("../img/logo_tmpa.png")}
                alt="logo"
                style={styles.logo}
              />
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                style={styles.button}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/addingCar";
                }}
              >
                <Typography>ajouter une allocation</Typography>
              </Button>
            </Box>
          </Grid>
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
                    style={styles.groupButton}
                  >
                    <Button
                      variant="contained"
                      style={styles.buttonExtendedView}
                      startIcon={<FullscreenIcon />}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "/extendedView";
                      }}
                    >
                      <Typography>Extended view</Typography>
                    </Button>

                    <Button
                      variant="contained"
                      color="primary"
                      style={styles.buttonExtendedView}
                      startIcon={<DonutLargeIcon />}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "/#";
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
                    color="primary"
                    endIcon={<ChevronRightIcon />}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/";
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
                        maxWidth="15"
                      ></ColumnDirective>

                      <ColumnDirective
                        field="marque"
                        headerName="Marque"
                        textAlign="Center"
                      ></ColumnDirective>
                      <ColumnDirective
                        field="immatriculation"
                        headerText="Immatriculation"
                        textAlign="Center"
                      />


                      <ColumnDirective
                        field="numeroChassis"
                        headerText="Numero de chassis"
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
                        headerText="ww"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="nombreDeCles"
                        headerName="Nombre de Clés"
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
                        headerText="Prénom"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        field="matricule"
                        headerName="Matricule"
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
                        field="numeroCarteCarburant"
                        headerText="Numero carte carburant"
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
  );
};

const styles = {
  divTable: {
    height: "100%",
    width: "99.90%",
    overflow: "auto",
    backgroundColor: "rgba(235, 235, 235, 2)",
    borderRadius: 8,
  },
  table: {
    height: "61.5vh",
    width: "99vw",
    margin: 0,
  },
  syncGrid: {
    backgroundColor: "#249bd7",
    height: "100%",
  },
  logo: {
    margin: 20,
    height: 100,
    width: 300,
  },
  addCarAndLogo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
  },
  bar: {
    //customizing the box above the data grid
    margin: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    textTransform: "capitalize",
    background: "linear-gradient(to right, #249bd7, #27539e)",
    marginRight: 35,
    marginLeft: 35,
    height: 50,
    borderRadius: 10,
  },
  singOutbutton: {
    backgroundColor: "#249bd7",
    marginLeft: 35,
    borderRadius: 8,
  },
  groupButton: {
    borderRadius: 8,
  },
  buttonExtendedView: {
    textTransform: "capitalize",
  },
};

export default SimpleViewtable;
