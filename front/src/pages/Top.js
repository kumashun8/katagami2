import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MemberList from 'components/lv4/MemberList';
import ApiPoster from 'components/lv4/ApiPoster';
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
  const [name, setName] = useState('');
  const [age, setAge] = useState(' ');
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);
  const [memberCount, setMemberCount] = useState(0);

  useEffect(() => {
    const handleGetMembers = members => {
      setMembers(members);
      setLoading(false);
    }
    setLoading(true);
    fetchMembers(handleGetMembers);
  }, [memberCount]);

  return (
    <div>
      <MemberList loading={loading} members={members} />
      {/* <ApiPoster /> */}
    </div>
  );
}
