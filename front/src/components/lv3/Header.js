import React from 'react';
import {
  Grid,
  AppBar,
  Toolbar
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { currentUser } from 'lib/auth';
import AppLogo from 'components/lv1/AppLogo';
import UserMenu from 'components/lv2/UserMenu';


const useStyles = makeStyles(theme => ({
  container: {
    alignItems: 'center'
  },
  item: {
  }
}));

export default function (props) {
  const {
    handleLogout
  } = props;

  const classes = useStyles();
  const auth = currentUser();

  return (
    <AppBar postion='static' >
      <Toolbar>
        <Grid container className={classes.container}>
          <Grid item xs={11}>
            <AppLogo />
          </Grid>
          {auth && (
            <Grid item xs={1}>
              <UserMenu
                id={auth}
                handleLogout={handleLogout}
              />
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}