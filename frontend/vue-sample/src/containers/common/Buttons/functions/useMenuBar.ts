import { LogoutedMenuBarProps, MenuActiveItemKeys } from '@/components/common/types';
import getPathFromPathname from '@/lib/functions/getPathFromPathname';
import { ref } from 'vue';
import { useStore } from 'vuex';

const useMenuBar = () => {
  const {
    state: {
      user,
      logout,
    },
  } = useStore();

  const { pathname } = window.location;
  const path = getPathFromPathname(pathname);

  const menuActiveItem = ref(path as MenuActiveItemKeys);
  const handleClickMenuItem: LogoutedMenuBarProps['onClickMenuItem'] = (name) => () => {
    menuActiveItem.value = name;
  };

  return ({
    menuActiveItem,
    handleClickMenuItem,
    user,
    handleLogout: logout,
  });
};

export default useMenuBar;
