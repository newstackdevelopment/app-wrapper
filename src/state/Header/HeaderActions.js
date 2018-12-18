import headerConsts from "./HeaderConsts";

export const setSearchValue = value => {
  return { type: headerConsts.SET_SEARCH_VALUE, payload: value };
};
export const setHeaderProps = props => {
  return { type: headerConsts.SET_HEADER_PROPS, payload: props };
};
export default {
  setSearchValue,
  setHeaderProps
};
