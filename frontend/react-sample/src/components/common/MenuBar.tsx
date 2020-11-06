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
        <LoginedMenuBar {...props} />
      ) : (
        <LogoutedMenuBar {...props} />
      )}
    </>
  );
};

export default MenuBar;