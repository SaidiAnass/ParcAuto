import * as React from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import {
  DataGrid,
  GridToolbar,
  useGridSlotComponentProps,
} from '@material-ui/data-grid'
import { Box, Grid, Button } from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { makeStyles } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ButtonGroup from '@material-ui/core/ButtonGroup'

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

  function CustomPagination() {
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

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 100,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 100,
    },
    {
      field: 'age',
      headerName: 'Age',
      width: 100,
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
    {
      field: 'id0',
      headerName: 'ID0',
      width: 100,
    },
    {
      field: 'firstName0',
      headerName: 'First name0',
      width: 100,
    },
    {
      field: 'lastName0',
      headerName: 'Last name0',
      width: 100,
    },
    {
      field: 'age0',
      headerName: 'Age0',
      width: 100,
    },
    {
      field: 'fullName0',
      headerName: 'Full name0',
      sortable: false,
      width: 100,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
        }`,
    },
    { field: 'id1', headerName: 'ID1', flex: 1 },
    {
      field: 'firstName1',
      headerName: 'First name1',
      width: 100,
    },
    {
      field: 'lastName1',
      headerName: 'Last name1',
      width: 100,
    },
    {
      field: 'age1',
      headerName: 'Age1',
      width: 100,
    },
    {
      field: 'fullName1',
      headerName: 'Full name1',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
        }`,
    },
    { field: 'id2', headerName: 'ID', width: 100 },
    {
      field: 'firstName2',
      headerName: 'First name2',
      width: 150,
    },
    {
      field: 'lastName2',
      headerName: 'Last name2',
      width: 150,
    },
    {
      field: 'age2',
      headerName: 'Age2',
      type: 'number',
      width: 110,
    },
    {
      field: 'fullName2',
      headerName: 'Full name2',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
        }`,
    },
    // {         // how to add fields
    //   field: 'operations',
    //   headerName: 'Operations',
    //   width: 00,
    // },
  ]

  const rows = [
    {
      id: 1,
      lastName: 'Snow',
      firstName: 'Jon',
      age: 35,
    },
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
              <DataGrid
                pagination
                density="compact"
                rows={rows}
                height="100%"
                columns={columns}
                pageSize={25}
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
    height: '91vh',
    width: '99vw',
    margin: 0,
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
