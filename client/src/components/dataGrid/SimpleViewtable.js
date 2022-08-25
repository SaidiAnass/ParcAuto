import * as React from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import {
  DataGrid,
  GridToolbar,
  useGridSlotComponentProps,
} from '@material-ui/data-grid'
import { Box, Grid, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { makeStyles } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import FullscreenIcon from '@material-ui/icons/Fullscreen'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ButtonGroup from '@material-ui/core/ButtonGroup'

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
})

function CustomPagination() {  // funtion for the custion pagination for the data grid
  const { state, apiRef } = useGridSlotComponentProps()
  const classes = useStyles()

  return (
    <Pagination
      className={classes.root}
      color="primary"
      count={state.pagination.pageCount}
      page={state.pagination.page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  )
}

const SimpleViewtable = () => {
  const theme = createTheme({  // custoizing the fonts
    typography: {
      fontFamily: ['K2D', 'Noto-sans', 'sans-serif'].join(','),
      fontSize: 15,
    },
  })

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      //type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
        }`,
    },
  ]

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 11, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 12, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 14, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 16, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ]
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
                src={require('../img/logo_tmpa.png')}
                alt="logo"
                style={styles.logo}
              />
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                style={styles.button}
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/addingCar'
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
                        e.preventDefault()
                        window.location.href = '/extendedView'
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
              <DataGrid
                pagination
                rows={rows}
                columns={columns}
                pageSize={15}
                checkboxSelection
                disableSelectionOnClick
                components={{
                  Toolbar: GridToolbar,
                  Pagination: CustomPagination,
                }}
              />
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
    height: '61.5vh',
    width: '99vw',
    margin: 0,
  },
  logo: {
    margin: 20,
    height: 100,
    width: 300,
  },
  addCarAndLogo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
  },
  bar: {       //customizing the box above the data grid
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    textTransform: 'capitalize',
    background: 'linear-gradient(to right, #249bd7, #27539e)',
    marginRight: 35,
    marginLeft: 35,
    height: 50,
    borderRadius: 10,
  },
  singOutbutton: {
    backgroundColor: '#249bd7',
    marginLeft: 35,
    borderRadius: 8,
  },
  groupButton: {
    borderRadius: 8,
  },
  buttonExtendedView: {
    textTransform: 'capitalize',
  },
}

export default SimpleViewtable
