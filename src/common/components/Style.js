import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  BoxGrid: {
    height: 500,
    justifyContent: "center",
    alignItems: "center",
    margin: "5rem 0 1rem 0",
    padding: "1rem 1rem",
  },

  DataGrid: {
    color: "balck",
    width: "100%",
    ///////////////
    "& .MuiDataGrid-iconSeparator": {
      display: "none  !important",
      fontWeight: "bold",
    },
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: "#272827",
      color: "white",
      fontSize: 14,
      fontWeight: "bold",
    },
    "& .MuiTablePagination-displayedRows": {
      color: "white",
    },
    "& .MuiDataGrid-cell": {
      border: "none",
    },
    "& .MuiButtonBase-root": {
      color: "white !important",
    },
    ".MuiDataGrid-root .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "bold",
      overFlow: "visible",
    },
  },
});
