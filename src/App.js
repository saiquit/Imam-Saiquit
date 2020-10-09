import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import NavbarTop from "./components/NavbarTop";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Spinner from "./components/Spinner";
import "./App.css";
import WithAnimation from "./hoc/WithAnimation";

const About = React.lazy(() => import("./components/About"));
const Experience = React.lazy(() => import("./components/Experience"));
const Education = React.lazy(() => import("./components/Education"));
const Skills = React.lazy(() => import("./components/Skills"));
// const Interest = React.lazy(() => import("./components/Interests"));
const Works = React.lazy(() => import("./components/Works"));
// withTransition
const AboutWithTransition = WithAnimation(About);
const ExperienceWithTransition = WithAnimation(Experience);
const EducationWithTransition = WithAnimation(Education);
const SkillsWithTransition = WithAnimation(Skills);
// const InterestsWithTransition = WithAnimation(Interest);
const WorksWithTransition = WithAnimation(Works);

function App() {
  const location = useLocation();
  return (
    <>
      <div className="col-4">
        <NavbarTop />
      </div>
      <Suspense fallback={<Spinner />}>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route
              path="/"
              render={(props) => {
                return (
                  <AboutWithTransition
                    {...props}
                    next="/experience"
                    prev="/skills"
                  />
                );
              }}
              exact
            />
            <Route
              path="/experience"
              render={(props) => {
                return (
                  <ExperienceWithTransition {...props} next="/works" prev="/" />
                );
              }}
              exact
            />
            <Route
              path="/works"
              render={(props) => {
                return (
                  <WorksWithTransition
                    {...props}
                    next="/education"
                    prev="/experience"
                  />
                );
              }}
              exact
            />
            <Route
              path="/education"
              render={(props) => {
                return (
                  <EducationWithTransition
                    {...props}
                    next="/skills"
                    prev="/works"
                  />
                );
              }}
              exact
            />
            <Route
              path="/skills"
              render={(props) => {
                return (
                  <SkillsWithTransition {...props} next="/" prev="/education" />
                );
              }}
              exact
            />
            {/* <Route
              path="/interests"
              render={(props) => {
                return (
                  <InterestsWithTransition {...props} next="/" prev="/skills" />
                );
              }}
              exact
            /> */}
          </Switch>
        </AnimatePresence>
      </Suspense>
    </>
  );
}

export default App;
