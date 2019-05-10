import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Loader from "../components/UI/Loader/Loader";

const Index = lazy(() => import("../Pages/Index"));
const Projects = lazy(() => import("../Pages/Projects"));
const Contact = lazy(() => import("../Pages/Contact"));
const Error = lazy(() => import("../Pages/404"));

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
      <Route
        path="/contact"
        exact
        render={() => (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        )}
      />
      <Route
        path="/404"
        render={() => (
          <Suspense fallback={<Loader />}>
            <Error />
          </Suspense>
        )}
      />

      <Redirect to="/404" />
    </Switch>
  );
};
export default Routers;
