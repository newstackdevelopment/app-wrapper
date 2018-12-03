import drawerConsts from "./DrawerConsts";
import drawerModel from "./DrawerModel";
const DrawerReducer = (state = drawerModel, action) => {
  switch (action.type) {
    case drawerConsts.TOGGLE_DRAWER:
      return { ...state, ...action.payload };
    case drawerConsts.UPDATE_MENU_ITEMS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default DrawerReducer;
