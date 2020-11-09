import React from 'react';
import MenuBar from '../../components/common/MenuBar';
import useMenuBar from './functions/useMenuBar';
import { MenuBarContainerProps } from './types';

const MenuBarContainer = (props: MenuBarContainerProps) => {
  const {
    user,
    menuActiveItem,
    handleLogout,
    handleClickMenuItem,
  } = useMenuBar();

  return (
    <MenuBar
      user={user}
      menuActiveItem={menuActiveItem}
      onLogout={handleLogout}
      onClickMenuItem={handleClickMenuItem}
    />
  );
};

export default MenuBarContainer;