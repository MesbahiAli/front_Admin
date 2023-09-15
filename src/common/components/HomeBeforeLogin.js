import React from 'react';
import { DataGrid ,GridToolbarQuickFilter} from '@mui/x-data-grid';
import { Box, Grid ,Typography} from '@mui/material'; // Import Box and Grid components
import { useStyles } from "./Style";

function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <GridToolbarQuickFilter />
    </Box>
  );
}

const columns = [
  { field: 'label', headerName: 'label', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'Solde',
    headerName: 'Solde',
    type: 'number',
    width: 90,
  },
  {
    field: 'Entreprise',
    headerName: 'Entreprise',
    width: 160,
  },
  {
    field: "date d'activation",
    headerName: "date d'activation",
    width: 160,
  },
  {
    field: "Status",
    headerName: 'Status',
    width: 160,
  },
  {
    field: "Action",
    headerName: 'Action',
    width: 160,
  },

];

const rows = [
  { id: 1, lastName: 'Snow', label: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const HomeBeforeLogin = () => {

  const classes = useStyles();

  return (
   <Box>
      <Grid container direction="column" className={classes.map} >
        <Grid item container>
          <Grid item xs={0} sm={1} />
          <Grid item xs={12} sm={10}>
            <Typography variant="h4" align="center" gutterBottom>
              Administration
            </Typography>
            <div style={{ height: 400, width: '100%', marginTop: '37px' }}>
              <DataGrid
                className={classes.DataGrid}
                rows={rows}
                columns={columns}
                components={{ Toolbar: QuickSearchToolbar }}
              />
            </div>
          </Grid>
          <Grid item xs={0} sm={1} />
        </Grid>
      </Grid>
  </Box>
  );
};

export default HomeBeforeLogin;
