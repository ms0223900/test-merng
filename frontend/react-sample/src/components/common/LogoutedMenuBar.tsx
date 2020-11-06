import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { LogoutedMenuBarProps } from './types';

const LogoutedMenuBar = ({
  menuActiveItem,
  onClickMenuItem,
}: LogoutedMenuBarProps) => {
  return (
    <>
      <Menu pointing secondary size="massive" color="teal">
        <Menu.Item
          name="home"
          active={menuActiveItem === 'home'}
          onClick={onClickMenuItem('home')}
          as={Link}
          to="/"
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="login"
            active={menuActiveItem === 'login'}
            onClick={onClickMenuItem('login')}
            as={Link}
            to="/login"
          />
          <Menu.Item
            name="register"
            active={menuActiveItem === 'register'}
            onClick={onClickMenuItem('register')}
            as={Link}
            to="/register"
          />
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default LogoutedMenuBar;