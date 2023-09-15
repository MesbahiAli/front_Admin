import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as BudgetActions from "../state/BudgetActions";
import { Link } from "react-router-dom";
import DashboardStyle from "./../Style/DashboardStyle";
import Slide from "@mui/material/Slide";
import { Button, Dialog, IconButton,AppBar,Toolbar,Box} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AjoutBudget from './../../AjoutBudget/components/AjoutBudget';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
  });

const Dashboard = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const budgets = useSelector((state) => state?.Budget.BudgetData);

  useEffect(() => {
    const id = localStorage.getItem("Id"); // Assuming it's a string
    dispatch(BudgetActions.BUDGET_START(id)); // Pass the ID as a string
  }, [dispatch]);

  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    

  return (
    <div style={DashboardStyle.rootStyle}>
      <h1>Tableau de bord</h1>
      <div style={DashboardStyle.contentStyle}>
        {localStorage.getItem("holder_profile") === "admin" ? (
          <Link
            to="/Administration-bd"
            style={{
              ...DashboardStyle.boxStyle,
              backgroundColor: "#d25715",
            }}
          >
            <div style={DashboardStyle.itemStyle}>
              <h3 style={DashboardStyle.titleStyle}>Administration</h3>
            </div>
          </Link>
        ) : null}
        <Button
        onClick={handleClickOpen}
          style={{
            ...DashboardStyle.boxStyle,
            backgroundColor: "#22a618",
          }}
          >
          <div style={DashboardStyle.itemStyle}>
            <h3 style={DashboardStyle.titleStyle}>+ Ajouter un budget</h3>
          </div>
        </Button>
      </div>

      <div style={DashboardStyle.contentStyle}>
        <h2>Liste des objets :</h2>
        <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
          {budgets &&
            budgets.map((budget) => (
              <li
                key={budget.budget_id}
                style={{
                  ...DashboardStyle.boxStyle,
                  backgroundColor: "#1830a6",
                }}
              >
                <Link
                  to={`/DetailBudget/${budget.budget_id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <h3>{budget.budget_title}</h3>
                </Link>
              </li>
            ))}
        </ul>
      </div>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
         <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
          <Box display="flex">
            <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
          </Box>Ajouter un nouveau budget
        <Box>
        </Box>
        </Toolbar>
        </AppBar>
        <AjoutBudget/>
      </Dialog>
    </div>
  );
};

export default Dashboard;
