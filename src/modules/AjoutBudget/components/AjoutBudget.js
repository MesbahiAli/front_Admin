import React from "react";
import { Formik, Form, Field } from "formik";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { addBudget } from "../../Dashboard/state/BudgetActions";

const btnstyle = {
  marginTop: "20px",
};

const AddBudgetPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

  const initialValues = {
    budgetLabel: "", 
    entrepriseName: "",
  };

  const handleSubmit = (values) => {
    
    dispatch(addBudget(values));
};

  return (
    <Grid align="center">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ values, errors, touched }) => (
          <Form>
            <Box align="center">
              <Typography variant="h4">Ajouter un nouveau budget</Typography>
              <Box className="divStyle">
                <Box className="inputStyle">
                  <Box
                    sx={{
                      display: "flex",
                      "& .MuiTextField-root": {
                        m: 1,
                        width: "30ch",
                        backgroundColor: "#f2f7fa",
                      },
                    }}
                  >
                    <Field 
                      type="text"
                      id="budgetLabel"
                      name="budgetLabel"
                      label="Label du budget"
                      placeholder="Label du budget"
                      as={TextField}
                    />
                  </Box>
                </Box>
                <Box className="inputStyle">
                  <Box
                    sx={{
                      display: "flex",
                      "& .MuiTextField-root": {
                        m: 1,
                        width: "30ch",
                        backgroundColor: "#f2f7fa",
                      },
                    }}
                  >
                    <Field // Updated field name
                      type="text"
                      id="entrepriseName"
                      name="entrepriseName"
                      label="Nom entreprise"
                      placeholder="Nom entreprise"
                      as={TextField}
                    />
                  </Box>
                </Box>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  style={btnstyle}
                >
                  Ajouter le budget
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};

export default AddBudgetPage;
