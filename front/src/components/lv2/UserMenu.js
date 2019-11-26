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

const useStyle = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    alignItems: 'center',
    color: grey[900]
  },
  menuItem: {
    padding: '6px 32px'
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

  const handleCloseWith = action => {
    action();
    setAnchorEl(false);
  }

  return (
    <div>
      <IconButton
        aria-haspopup='true'
        aria-controls='menu-appbar'
        onClick={e => setAnchorEl(e.currentTarget)}
      >
        <UserIcon size={40} email={localStorage.getItem('email')} />
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
        <MenuItem className={classes.menuItem} onClick={() => setAnchorEl(false)}>
          <Link
            to={`/users/${id}`}
            className={classes.link}
          >
            マイページ
           </Link>
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={() => handleCloseWith(handleLogout)}>
          ログアウト
        </MenuItem>
      </Menu>
    </div>
    
  );
}