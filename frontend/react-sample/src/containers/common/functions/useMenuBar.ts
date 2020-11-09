import { useCallback, useContext, useState } from "react";
import { LogoutedMenuBarProps, MenuActiveItemKeys } from "../../../components/common/types";
import { AuthContext } from "../../../constants/context";
import getPathFromPathname from "../../../lib/functions/getPathFromPathname";

const useMenuBar = () => {
  const {
    user,
    logout,
  } = useContext(AuthContext);

  const { pathname, } = window.location;
  const path = getPathFromPathname(pathname);
  const [menuActiveItem, setActiveItem] = useState(path as MenuActiveItemKeys);

  const handleClickMenuItem: LogoutedMenuBarProps['onClickMenuItem'] = useCallback((name) => () => {
    setActiveItem(name);
  }, []);

  return ({
    menuActiveItem,
    handleClickMenuItem,
    user,
    handleLogout: logout,
  });
};

export default useMenuBar;