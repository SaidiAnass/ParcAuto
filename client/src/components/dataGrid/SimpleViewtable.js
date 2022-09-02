import * as React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import axios from "axios";
import { Box, Grid, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import DeleteIcon from "@material-ui/icons/Delete";
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
import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

const SimpleViewtable = () => {

  let navigate = useNavigate()
  const theme = createTheme({
    // custoizing the fonts
    typography: {
      fontFamily: ["K2D", "Noto-sans", "sans-serif"].join(","),
      fontSize: 15,
    },
  });

  //  const [tableData, setTableData] = useState([])

  //   useEffect(() => {
  //     axios.get('http://localhost:4000/api/contract/').then(res => setTableData(res.data)).then(console.log("I AM GET METHOD"))

  //   }, [])

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

  // const baseURL = "http://localhost:4000/api/contract"
  // const data = new DataManager({
  //   adaptor : new UrlAdaptor(),
  //   insertUrl: baseURL + '/',
  //   removeurl: baseURL + '/:id',
  //   updateUrl: baseURL + '/:id',
  // })

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/contract/")
      .then((res) => {
        setData(res.data);
      })
    // .then((data) => {
    //   return { result: data };
    // });
  }, []);

  let grid = null
  const rowSelected = (args) => {
    const selectedRowIndex = grid.getSelectedRowIndexes();
    // alert(selectedRowIndex.da)
    // const selectedrowindex = this.grid.getSelectedRowIndexes();
    const selectedrecords = grid.getSelectedRecords();
    const id = JSON.stringify(selectedrecords)
    var stringify = JSON.parse(id)
    //alert(stringify[0]['_id'])
    window.idToDelete = stringify[0]['_id']
    //   if (key == "_id") {
    //     alert(value)
    //     return value;
    //   }
    // })
    // alert(selectedRowIndex + " : " + JSON.stringify(selectedrecords, function (key, value) {
    //   if (key == "_id") {
    //     alert(value)
    //     return value;
    //   }
    // }));
    // var index = grid.getRowIndexByPrimaryKey(10251);
    // // Select the row using the index value
    // grid.selectRow(index)

    //args.row.getRowIndexByPrimaryKey
  };

  // function dataStateChange(args) {
  //   // useEffect(()=>{
  //   //   axios.get('http://localhost:4000/api/contract/').then(res => {setData(res.data)}).then((data)=>{return{result: data}})
  //   // }, [])
  // }
  // const dataSourceChanged = (state) => {
  //   alert("NULLSHIT");
  //   console.log(state);
  // };

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
              {/* <Button
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
              </Button> */}
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
                      color="primary"
                      startIcon={<AddIcon />}
                      // style={styles.button}
                      style={styles.buttonExtendedView}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "/addingCar";
                      }}
                    >
                      <Typography>ajouter une allocation</Typography>
                    </Button>
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
                    {/* 
                    <Button
                      variant="contained"
                      color="primary"

                      startIcon={<DonutLargeIcon />}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "/#";
                      }}
                    >
                      <Typography>Charts</Typography>
                    </Button> */}
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<DeleteIcon />}
                      style={styles.buttonExtendedView}
                      onClick={(e) => {
                        e.preventDefault();
                        //const name = prompt("Entrez l'ID du contract");
                        axios.delete(`http://localhost:4000/api/contract/${window.idToDelete}`);
                      }}
                    >
                      <Typography>Delete</Typography>
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    style={styles.singOutbutton}
                    startIcon={<ExitToAppIcon />}
                    onClick={(e) => {
                      e.preventDefault();
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
                    dataSource={data}
                    // dataSourceChanged={dataSourceChanged}
                    // dataStateChange={dataStateChange}
                    allowResizing={true}
                    height="100%"
                    gridLines="Both"
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
                    //selectedRowIndex={1}
                    rowSelected={rowSelected}
                    ref={g => grid = g}
                  >
                    <ColumnsDirective>
                      <ColumnDirective
                        type="checkbox"
                        maxWidth="60"
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
                      //isPrimaryKey="true"
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
                        isPrimaryKey="true"
                        field="numeroContract"
                        headerText="Numero de contract"
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
    height: "66vh",
    width: "99vw",
    margin: 0,
  },
  syncGrid: {
    backgroundColor: "#249bd7",
    height: "100%",
  },
  logo: {
    margin: 20,
    height: 140,
    width: 390,
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
