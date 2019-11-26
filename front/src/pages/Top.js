import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MemberList from 'components/lv4/MemberList';
import MemberForm from 'components/lv4/MemberForm';
import { fetchMembers, postMember } from 'lib/api';
import { indigo, grey } from '@material-ui/core/colors';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundColor: grey[50],
    color: indigo[900],
    marginTop: theme.spacing(4),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(4)
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '400px'
  },
  button: {
    marginTop: theme.spacing(1),
  },
}));

export default function () {
  const classes = useStyles();
  const [name,    setName   ] = useState('');
  const [age,     setAge    ] = useState('');
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);
  const [latest,  setLatest ] = useState(true);

  useEffect(() => {
    // console.log(`useEffect! latest: ${latest}`);
    const handleGetMembers = members => {
      setMembers(members);
      setLoading(false);
    }
    setName('');
    setAge('');
    setLoading(true);
    fetchMembers(handleGetMembers);
  }, [latest]);

  return (
    <Container className={classes.wrapper}>
      <MemberList
        loading={loading}
        members={members}
      />
      <MemberForm
        classes={classes}
        name={name}
        age={age}
        handleChangeName={setName}
        handleChangeAge={setAge}
        handlePost={() =>
          postMember({
            name,
            age,
            setLatest
          })}
      />
    </Container>
  );
}
