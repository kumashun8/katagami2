import React from 'react';
import { Grid, AppBar, Toolbar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { indigo } from '@material-ui/core/colors';
import AppLogo from 'components/lv1/AppLogo';
import { currentUser } from 'lib/auth';
import UserMenu from 'components/lv2/UserMenu';
import UserIcon from 'components/lv1/UserIcon';


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
    <AppBar postion='static'>
      <Toolbar>
        <Grid container className={classes.container}>
          <Grid items xs={11}>
            <AppLogo />
          </Grid>
          {auth && (
            <Grid items xs={1}>
              <UserMenu />
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}