import React from "react";
import {Switch, Route} from 'react-router-dom';

import Template from 'src/template/app';

import {routes} from 'src/routes';

export default () => {
  return (
    <Template>
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
    </Template>
  );
}
