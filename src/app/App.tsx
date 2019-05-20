import React from "react";
import {Switch, Route} from 'react-router-dom';

import {routes} from 'src/routes';

export default () => {
  return (
    <Switch>
      {
        routes.map(route => (
          <Route
            key={route.name}
            exact={route.isExact}
            path={route.path}
            component={route.component}
          />
        ))
      }
    </Switch>
  );
}
