import React, { Suspense } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Spinner from "../components/Spinner";

const About = React.lazy(() => import("../components/About"));
const Experience = React.lazy(() => import("../components/Experience"));
const Education = React.lazy(() => import("../components/Education"));
const Skills = React.lazy(() => import("../components/Skills"));
const Interest = React.lazy(() => import("../components/Interests"));
function Home() {
  const location = useLocation();
  return (
    <>
      <Suspense fallback={Spinner}>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route path="/" component={About} exact />
            <Route path="/experience" component={Experience} exact />
            <Route path="/skills" component={Skills} exact />
            <Route path="/education" component={Education} exact />
            <Route path="/interests" component={Interest} exact />
          </Switch>
        </AnimatePresence>
      </Suspense>
    </>
  );
}

export default Home;
