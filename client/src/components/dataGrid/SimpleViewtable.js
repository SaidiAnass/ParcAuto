import * as React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import axios from "axios";
import { Box, Grid, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
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
import { useNavigate } from "react-router-dom";
import UpdateIcon from '@material-ui/icons/Update';

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

const SimpleViewtable = () => {

  let navigate = useNavigate() //for handling the log out 
  const theme = createTheme({
    // custoizing the fonts
    typography: {
      fontFamily: ["K2D", "Noto-sans", "sans-serif"].join(","),
      fontSize: 15,
    },
  });

  const toolbarOptions = [
    "ColumnChooser",
    "Search",
    //"Add",
    "Edit",
    //"Delete",
    "Update",
    "Cancel",
    "ExcelExport",
  ];
  const selectionsettings = { persistSelection: true };
  const editSettings = {
    allowEditing: true,
    //allowAdding: true,
    // allowDeleting: true,
    newRowPosition: "Top",
  };
  const filterSettings = { type: "CheckBox" };

  // for the contracts data
  const [data, setData] = useState([]);

  //getting all the contracts
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/contract/")
      .then((res) => {
        setData(res.data);
      })
  }, []);

  let grid = null

  //handling the row selection
  const rowSelected = (args) => {
    const selectedrecords = grid.getSelectedRecords();
    const id = JSON.stringify(selectedrecords)
    var stringify = JSON.parse(id)
    window.updated = stringify[0]
    window.idToDelete = stringify[0]['_id']
    window.numeroContract = stringify[0]['numeroContract']
    console.log(stringify[0])
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
          <Grid item>
            <Box style={styles.addCarAndLogo}>
              <img
                src={require("../img/logo_tmpa.png")}
                alt="logo"
                style={styles.logo}
              />
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
                      startIcon={<AddIcon />}
                      style={styles.CrudButton}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "/addingCar";
                      }}
                    >
                      <Typography>ajouter une allocation</Typography>
                    </Button>

                    //for the delete operation
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

                    //for the update
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

                      //handling log out
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
                    allowResizing={true}
                    wrapText={true}
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
                        field="numeroParc"
                        headerText="Numero de Parc"
                        textAlign="Center"
                      />
                      <ColumnDirective
                        isPrimaryKey="true"
                        field="numeroContract"
                        headerText="Numero de contract"
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

  //customizing the container for the data grid
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

  //customizing the data grid
  syncGrid: {
    backgroundColor: "#249bd7",
    height: "100%",
  },

  //customizing the logo
  logo: {
    margin: 20,
    height: 140,
    width: 400,
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
  CrudButton: {
    textTransform: "capitalize",
  },
  buttonExtendedView: {
    textTransform: "capitalize",
    marginRight: 30,
  }
};

export default SimpleViewtable;
