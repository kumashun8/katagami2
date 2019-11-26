import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import {
  IconButton,
  Menu,
  MenuItem
} from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import UserIcon from 'components/lv1/UserIcon';
import { currentUser } from 'lib/auth';

const useStyle = makeStyles(theme => ({
  link: {
    textDecoration: 'none'
  },
  logo: {
    fontSize: props => props.size,
    padding: props => props.size / 4,
    margin: 0,
    color: grey[50],
  }
}))
export default function () {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <div>
      <IconButton
        aria-haspopup='true'
        aria-controls='menu-appbar'
        onClick={e => setAnchorEl(e.currentTarget)}
      >
        <UserIcon size={40} email='kk' />
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem>マイページ</MenuItem>
        <MenuItem >ログアウト</MenuItem>
      </Menu>
    </div>
    
  );
}