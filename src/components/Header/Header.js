import React, { Component } from "react";
import { Layout, Button, Row, Col, Input } from "antd";
const { Header } = Layout;
const { Search } = Input;
const ENTER = 13;
export default class DowHeader extends Component {
  setSearchValue = e => {
    var code = e.keyCode || e.charCode;
    return code === ENTER
      ? this.props.onSearch && this.props.onSearch(e)
      : this.props.setSearchValue(e.target.value);
  };
  render() {
    const { props } = this;
    return (
      <Header style={{ padding: 0 }}>
        <Row>
          {props.toggleDrawer && this.props.hasDrawer && (
            <Col
              onClick={props.toggleDrawer}
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
                style={{ borderStyle: "none" }}
              />
            </Col>
          )}
          <Col
            xs={0}
            sm={0}
            md={7}
            lg={6}
            xl={4}
            style={{ textAlign: "center" }}
          >
            {props.logo && (
              <img
                src={props.logo.src}
                alt={props.logo.alt ? props.logo.alt : "missing alt"}
              />
            )}
          </Col>
          <Col xs={12} sm={8} md={6} lg={6} xl={4}>
            <h1>{props.appName || "Default App"}</h1>
          </Col>
          <Col
            xs={0}
            sm={7}
            md={6}
            lg={4}
            xl={4}
            style={{ textAlign: "center", float: "right" }}
          >
            {this.props.onSearch && (
              <Search
                placeholder="input search text"
                onSearch={props.onSearch}
                onKeyUp={this.setSearchValue}
                style={{ width: 200 }}
              />
            )}
          </Col>
        </Row>
      </Header>
    );
  }
}
