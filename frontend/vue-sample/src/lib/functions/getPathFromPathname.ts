const getPathFromPathname = (pathname: string) => (
  pathname === '/' ? 'home' : pathname.substr(1)
);

export default getPathFromPathname;