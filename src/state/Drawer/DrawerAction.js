import drawerConsts from "./DrawerConsts";
export const toggleDrawer = show => {
  return { type: drawerConsts.TOGGLE_DRAWER, payload: { show } };
};
export const updateMenuItems = menuItems => {
  return { type: drawerConsts.UPDATE_MENU_ITEMS, payload: { menuItems } };
};
export default {
  toggleDrawer,
  updateMenuItems
};
