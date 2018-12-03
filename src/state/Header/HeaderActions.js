import headerConsts from "./HeaderConsts";

export const setSearchValue = value => {
  return { type: headerConsts.SET_SEARCH_VALUE, payload: value };
};
export default {
  setSearchValue
};
