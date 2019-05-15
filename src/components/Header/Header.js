import React, { Component } from "react";
import PropTypes from "prop-types";
import { Layout, Button, Row, Col, Input, Avatar } from "antd";
const { Header: LibraryHeader } = Layout;
const { Search } = Input;
const ENTER = 13;
var randomColorCreator = function randomColorCreator() {
  var rgb = [];

  for (var i = 0; i < 3; i++) {
    rgb.push(Math.floor(Math.random() * 255));
  }
  return "rgb(" + rgb.join(",") + ")";
};
var randomColor = randomColorCreator();
/**
 * Custom Header
 */
class Header extends Component {
  static defaultProps = {
    onSearch: null,
    setSearchValue: null
  };
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }
  setSearchValue = e => {
    var code = e.keyCode || e.charCode;
    if (code === ENTER) {
      return this.props.onSearch && this.props.onSearch(e);
    }
    this.setState({ searchValue: e.target.value });
    this.props.setSearchValue(e.target.value);
  };
  render() {
    const { props } = this;
    const {
      theme,
      logo,
      onSearch,
      user,
      hasDrawer,
      onUserIconClick,
      toggleDrawer,
      appName = "Default App"
    } = props;
    return (
      <LibraryHeader
        style={{
          padding: 0,
          borderBottom: "1px solid #d9d9d9",
          height: "80px"
        }}
      >
        <Row gutter={16}>
          {toggleDrawer && hasDrawer && (
            <Col
              onClick={toggleDrawer}
              xs={3}
              sm={2}
              md={2}
              lg={1}
              xl={1}
              style={{ textAlign: "center" }}
            >
              <Button
                ghost
                icon={false ? "menu-unfold" : "menu-fold"}
                size={"large"}
                style={{
                  borderStyle: "none",
                  color: theme === "dark" ? "#ffffff" : "#000000"
                }}
              />
            </Col>
          )}
          {logo && (
            <Col
              xs={0}
              sm={0}
              md={4}
              lg={3}
              xl={2}
              style={{ textAlign: "center", height: "80px" }}
            >
              <img
                style={{ width: "100%" }}
                src={logo.src}
                alt={logo.alt ? logo.alt : "missing alt"}
              />
            </Col>
          )}
          <Col xs={15} sm={12} md={9} lg={8} xl={!logo ? 7 : 8}>
            <h1
              style={{
                color: theme === "dark" ? "#ffffff" : "#000000"
              }}
            >
              {appName}
            </h1>
          </Col>
          <Col
            {...{
              xs: { span: 0, offset: 0 },
              sm: { span: 8, offset: 0 },
              md: { span: !logo ? 7 : 6, offset: !logo ? 4 : 1 },
              lg: { span: !logo ? 7 : 5, offset: !logo ? 7 : 5 },
              xl: { span: !logo ? 7 : 6, offset: !logo ? 8 : 6 }
            }}
          >
            {onSearch && (
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                onKeyUp={this.setSearchValue}
                style={{ width: "100%" }}
              />
            )}
          </Col>
          <Col
            {...{
              xs: { span: 3, offset: 3 },
              sm: { span: 1, offset: 0 },
              md: { span: 1, offset: 0 },
              lg: { span: 1, offset: 0 },
              xl: { span: 1, offset: 0 }
            }}
          >
            {user && (
              <Avatar
                onClick={onUserIconClick}
                icon={user.name ? undefined : "user"}
                size="large"
                style={{
                  backgroundColor: randomColor,
                  verticalAlign: "middle"
                }}
              >
                {user.name}
              </Avatar>
            )}
          </Col>
        </Row>
      </LibraryHeader>
    );
  }
}
Header.propTypes = {
  /**
   *function(searchEvent) { } : Event when enterbutton is pressed. .
   */
  onSearch: PropTypes.func,
  /**
   * function() { } : Action that happens onKeyup.
   * This would be a good spot to set the header searchValue to exterior state.
   */
  setSearchValue: PropTypes.func
};
export default Header;
