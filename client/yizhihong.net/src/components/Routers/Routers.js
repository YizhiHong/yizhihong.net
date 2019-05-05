import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "../UI/Loader/Loader";

const Index = lazy(() => import("../Pages/Index"));
const Projects = lazy(() => import("../Pages/Projects"));
// const Contact = lazy(() => import('../Pages/Contact'))

const Routers = props => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={() => (
          <Suspense fallback={<Loader />}>
            <Index />
          </Suspense>
        )}
      />

      <Route
        path="/projects"
        exact
        render={() => (
          <Suspense fallback={<Loader />}>
            <Projects />
          </Suspense>
        )}
      />
      {/* <Route path='/Contact' exact component={Projects} /> */}
    </Switch>
  );
};
export default Routers;
