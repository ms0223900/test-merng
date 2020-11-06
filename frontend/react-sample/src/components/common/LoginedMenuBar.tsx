import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { LoginedMenuBarProps } from './types';

const LoginedMenuBar = ({
  user, onLogout
}: LoginedMenuBarProps) => {
  return (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item name={user.username} active as={Link} to="/" />
      <Menu.Menu position="right">
        <Menu.Item name="logout" onClick={onLogout} />
      </Menu.Menu>
    </Menu>
  );
};

export default LoginedMenuBar;