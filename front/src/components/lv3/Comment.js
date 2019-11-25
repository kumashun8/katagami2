import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Grid
} from "@material-ui/core";
import {
  Edit,
  Delete,
  Cancel
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { currentUser } from 'lib/auth';
import { updateComment, deleteComment } from 'lib/api';
import { format_date } from 'lib/format';
import UserIcon from 'components/lv1/UserIcon';

const useStyles = makeStyles(theme => ({
  container: {
    width: 800
  },
}));

export default function (props) {
  const {
    id,
    baseDetail,
    userId,
    userEmail,
    createdAt
  } = props;

  const classes = useStyles();
  const isOwnComment = userId.toString() === currentUser();
  const [detail,           setDetail] = useState(baseDetail);
  const [isEditteble, setIsEdittable] = useState(false);
  const [isDeleted,     setIsDeleted] = useState(false);

  const toggleEdittable = () => {
    setIsEdittable(!isEditteble);
  }
  const handleDelete = response => {
    setIsDeleted(true);
  }
  const resetEdition = () => {
    toggleEdittable();
    setDetail(baseDetail);
  }

  useEffect(() => {
    setDetail(baseDetail);
  }, [baseDetail]);

  if (isDeleted) {
    return <></>;
  }

  return (
    <Grid container spacing={2} className={classes.container}>
      <Grid item xs={1}>
        <UserIcon id={userId} email={userEmail} />
      </Grid>
      <Grid item xs={5}>
        <TextField
          multiline
          fullWidth
          value={detail}
          disabled={!(isOwnComment && isEditteble)}
          onChange={e => setDetail(e.target.value)}
        />
      </Grid>
      <Grid item xs={3}>{format_date(createdAt)}</Grid>
      {
        isOwnComment ? (
          isEditteble ? (
            <Grid item xs={3}>
              <Button
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
            </Grid>
          ) : (
            <Grid item xs={3}>
              <Button
                onClick={toggleEdittable}>
                <Edit />
              </Button>
                <Button onClick={() => 
                  deleteComment({
                    id,
                    handleDelete
                  })
                }>
                <Delete />
              </Button>
            </Grid>
            )
        ) : <></>
      }
    </Grid>
  );
}