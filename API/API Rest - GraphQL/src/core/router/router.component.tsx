import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterCollectionScene } from 'scenes/character-collection.scene';
import { CharacterScene } from 'scenes/character.scene';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={switchRoutes.root}
          component={CharacterCollectionScene}
        />
        <Route
          exact={true}
          path={switchRoutes.character}
          component={CharacterScene}
        />
      </Switch>
    </HashRouter>
  );
};
