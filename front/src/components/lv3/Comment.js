import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  TextField,
  Grid
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { currentUser } from 'lib/auth';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '640px'
  },
  input: {
    width: '400px'
  },
  button: {
    marginTop: theme.spacing(1),
  },
}));

export default function (props) {
  const {
    id,
    detail,
    created_at,
    userId
  } = props;

  const isOwnComment = userId.toString() === currentUser();
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <Box>
        <TextField
          multiline
          className={classes.input}
          value={detail}
          disabled={!isOwnComment}
        />
      </Box>
      {
        isOwnComment ? (
          <Box>
            <Button>
              編集
            </Button>
            <Button>
              削除
            </Button>
          </Box>
        ) : <></>
      }
    </Grid>
  );
}