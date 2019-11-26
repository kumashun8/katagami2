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
  }
}));

export default function (props) {
  const {
    id,
    handleLogout
  } = props;
  const classes = useStyle();
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
        <MenuItem>
          <Link
            to={`/users/${id}`}
            className={classes.link}
          >
            マイページ
          </Link>
        </MenuItem>
        <MenuItem onClick={handleLogout}>ログアウト</MenuItem>
      </Menu>
    </div>
    
  );
}