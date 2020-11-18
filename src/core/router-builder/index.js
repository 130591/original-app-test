import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export const routerBuilder = ({ modules }) => {
  return (
    <Router>
    <Switch>
      {modules.map(mod => {
        <Route path={mod.path}>
          <mod.Component true={mod.exact} />
        </Route>
      })}
    </Switch>
    </Router>
  )
}
