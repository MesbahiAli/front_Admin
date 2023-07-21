import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from "./common/components/Layout";
import Dashboard from './common/components/dashboard/ui/Dashboard';
import ProtectedRoute from './routing/ProtectedRoute';
import _ from "lodash";
import NotFound from './common/components/NotFound';
import Spinner from "./common/components/SpinnerCustomized";
import { useSelector } from "react-redux";
import * as roles from "./routing/roles";
import HomeBeforeLogin from './common/components/HomeBeforeLogin';
import HomeAfterLogin from './common/components/HomeAfterLogin';
// import ProjectList from './modules/Authentification/Budget/ProjectList'; // Import the ProjectForm component
// import BudgetList from './modules/Authentification/Budget/BudgetList';
// import ProjectForm from './modules/Authentification/Budget/ProjectForm';



const protectedRoutes = {
  homeAfterLogin: { path: "/homeafterlogin", requiredRoles: [], component: HomeAfterLogin },
  // projects: { path: "/projects", requiredRoles: [], component: ProjectList }, 
  // budgets: { path: "/budgets", requiredRoles: [], component: BudgetList }, 
};

let isAuthenticated = localStorage.getItem("token"); // state managed with authentication module

function App() {
  const state = useSelector(state => state);

  const [projects, setProjects] = useState([]);

  const handleAddProject = (newProject) => {
    // You can implement API calls here to add the project to the backend
    setProjects([...projects, newProject]);
  };


  let loadingProps;
  let reducerHasLoading = _.pickBy(state, { isLoading: true });
  if (reducerHasLoading) {
    const target = _.keys(reducerHasLoading)[0];
    let nextProps = reducerHasLoading[target];
    if (target) {
      loadingProps = { ...nextProps };
    }
  }

  // Routes for non-authenticated users
  let routes = (
    <Layout>
      <Switch>
      <Route exact path="/homebeforelogin" component={HomeBeforeLogin} />
        <Route exact path="/" render={() => <Redirect to="/homebeforelogin" />} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  );

  // Routes for authenticated users
  let content = (
    <Switch>
      <Route exact path="/homeafterlogin" component={HomeAfterLogin} />
      {protectedRoutes && Object.entries(protectedRoutes).map(([routeKey, routeProps]) => (
        <ProtectedRoute
          key={routeKey}
          roles={routeProps.requiredRoles}
          path={routeProps.path}
          component={routeProps.component}
        />
      ))}
      <Route exact path="/" render={() => <Redirect to="/homeafterlogin" />} />

      <Route path="*" component={NotFound} />
    </Switch>
  );

  if (isAuthenticated) {
    routes = (
      <Layout>
        <Dashboard
          roles={protectedRoutes}
          content={content}
        />
      </Layout>
    );
  }

  return (
    <div>
      {loadingProps?.isLoading ? (
        <Spinner />
      ) : (
        <></>
      )}
      {routes}
    </div>
  );
}

export default App;
