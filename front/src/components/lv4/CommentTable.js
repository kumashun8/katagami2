import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { format_date } from 'lib/format';
import { indigo, grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  header: {
    backgroundColor: indigo[100],
  }
});

export default function ({ comments }) {
  const classes = useStyles();
  console.log(comments);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label='own comments table'>
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell align='left'>Member</TableCell>
            <TableCell align='left'>Detail</TableCell>
            <TableCell align='left'>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {comments.map(comment => (
            <TableRow key={comment.id}>
              <TableCell component='th' scope='row'>
                {comment.member_id}
              </TableCell>
              <TableCell align='left'>{comment.detail}</TableCell>
              <TableCell align='left'>{format_date(comment.created_at)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

