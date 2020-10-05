import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CompanyLists from "./Pages/CompanyLists/CompanyLists";
import Detail from "./Pages/Detail/Detail";
import Recommendation from "./Pages/Recommendation/Recommendation";
import Resume from "./Pages/Resume/Resume";
import Salary from "./Pages/Salary/Salary";
import Profile from "./Pages/Profile/Profile";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={CompanyLists} />
          <Route exact path="/Detail" component={Detail} />
          <Route exact path="/Recommendation" component={Recommendation} />
          <Route exact path="/Resume" component={Resume} />
          <Route exact path="/Salary" component={Salary} />
          <Route exact path="/Profile" component={Profile} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
