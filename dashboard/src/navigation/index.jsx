import { allNav } from "./allNav";

export const getNavs = (role) => {
  const finalNav = allNav.filter((nav) => nav.role === role);

  return finalNav;
};
