import React from 'react';
import LoginedMenuBar from './LoginedMenuBar';
import LogoutedMenuBar from './LogoutedMenuBar';
import { MenuBarProps } from './types';

const MenuBar = (props: MenuBarProps) => {
  const {
    user
  } = props;

  return (
    <>
      {user ? (
        <LoginedMenuBar {...props} user={user} />
      ) : (
        <LogoutedMenuBar {...props} />
      )}
    </>
  );
};

export default MenuBar;