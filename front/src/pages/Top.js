import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MemberList from 'components/lv4/MemberList';
import MemberForm from 'components/lv4/MemberForm';
import { fetchMembers, postMember } from 'lib/api';

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
    <div>
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
    </div>
  );
}
