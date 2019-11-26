import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '400px'
  },
  button: {
    marginTop: theme.spacing(1),
  },
}));

export default function(props) {
  const {
    detail,
    handleChangeDetail,
    handlePost
  } = props;

  const classes = useStyles();

  return (
    <form noValidate autoComplete='off'>
      <div className={classes.container}>
        <TextField
          id='standard-basic'
          label='コメントを入力'
          margin='dense'
          value={detail}
          onChange={e => handleChangeDetail(e.target.value)}
        />
        <Button
          variant='contained'
          color='primary'
          disabled={detail.length === 0}
          className={classes.button}
          onClick={handlePost}
        >
          追加
        </Button>
      </div>
    </form>
  );
};