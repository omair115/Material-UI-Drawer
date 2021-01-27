import React from "react";
import { Router, Route} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Home from "../pages/dashboard/Dashboard";
import NotFoundPage from '../pages/Errors/404'

const history = createBrowserHistory();

const Routes = props => {
const { classes } = props;

return(
  <div>
      <Router history={history}>
            <main className={classes.content}>
                <Route exact path="/" component={Home} />
                <Route path="/UsersDetails" component={UsersDetails} />
                <Route path="/404" component={NotFoundPage} />
                <Redirect to="/404" />
            </main>
      </Router>
  </div>  
)}

Routes.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Routes);