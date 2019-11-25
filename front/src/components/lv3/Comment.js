import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  TextField,
  Grid
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { currentUser } from 'lib/auth';
import { indigo } from '@material-ui/core/colors';
import { Edit, Delete, Cancel } from '@material-ui/icons';
import { updateComment, deleteComment } from 'lib/api';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '640px',
    color: indigo[900]
  },
  input: {
    width: '400px'
  },
  button: {
    color: indigo[900],
    marginTop: theme.spacing(1)
  },
}));

export default function (props) {
  const {
    id,
    baseDetail,
    userId
  } = props;

  const [detail, setDetail] = useState(baseDetail);
  const [isEditteble, setIsEdittable] = useState(false);
  const isOwnComment = userId.toString() === currentUser();
  const classes = useStyles();

  const toggleEdittable = () => {
    setIsEdittable(!isEditteble);
  }

  const resetEdition = () => {
    toggleEdittable();
    setDetail(baseDetail);
  }

  useEffect(() => {
    setDetail(baseDetail);
  }, [baseDetail]);

  return (
    <Grid className={classes.container}>
      <Box>
        <TextField
          multiline
          className={classes.input}
          value={detail}
          disabled={!(isOwnComment && isEditteble)}
          onChange={e => setDetail(e.target.value)}
        />
      </Box>
      {
        isOwnComment ? (
          isEditteble ? (
            <Box>
              <Button
                className={classes.button}
                onClick={resetEdition}>
                <Cancel />
              </Button>
              <Button onClick={() =>
                updateComment({
                  id,
                  detail,
                  toggleEdittable
                })
              }>
                保存
              </Button>
            </Box>
          ) : (
            <Box>
              <Button
                className={classes.button}
                onClick={toggleEdittable}>
                <Edit />
              </Button>
              <Button>
                <Delete />
              </Button>
            </Box>
            )
        ) : <></>
      }
    </Grid>
  );
}