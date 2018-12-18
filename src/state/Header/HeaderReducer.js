import headerConsts from "./HeaderConsts";
import headerModel from "./HeaderModel";
const HeaderReducer = (state = headerModel, action) => {
  switch (action.type) {
    case headerConsts.SET_HEADER_PROPS:
      return { ...state, ...action.payload };
    case headerConsts.SET_SEARCH_VALUE:
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
};
export default HeaderReducer;
