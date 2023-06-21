import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router';
import * as classes from './app.layout.styles';
import { switchRoutes } from 'core/router';

export const AppLayout: React.FunctionComponent = (props) => {
  const { children } = props;
  const history = useHistory();

  const onClickApiCharacter = () => {
    history.push(switchRoutes.characterCollection);
  };

  const onClickCustomCharacter = () => {
    history.push(switchRoutes.customCollection);
  };

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="Menu">
            <AccountCircle />
          </IconButton>
        </Toolbar>
        <Button
          variant="contained"
          disableElevation
          color="primary"
          onClick={onClickApiCharacter}
        >
          Rick and Morty API
        </Button>
        <Button
          variant="contained"
          disableElevation
          color="primary"
          onClick={onClickCustomCharacter}
        >
          Custom API Rick&Morty
        </Button>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
