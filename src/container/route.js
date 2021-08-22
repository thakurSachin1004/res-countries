import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FlagContainer from './flagContainer';
import CountryDetails from './CountryDetail';

const RouteContainer = () => {
  return (
    <Switch>
      <Route exact path="/" component={FlagContainer} />
      <Route
        exact
        path="/:country"
        component={CountryDetails}
      />
    </Switch>
  );
};

export default RouteContainer;
