import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
  CharacterCollectionScene,
  CharacterScene,
  CustomCharacterScene,
} from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.characterCollection]}
          component={CharacterCollectionScene}
        />
        <Route
          exact={true}
          path={switchRoutes.character}
          component={CharacterScene}
        />
        <Route
          exact={true}
          path={switchRoutes.customCollection}
          component={CustomCharacterScene}
        />
      </Switch>
    </HashRouter>
  );
};
