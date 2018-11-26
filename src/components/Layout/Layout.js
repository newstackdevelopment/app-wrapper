import React, { Component } from "react";
import PropTypes from "prop-types";
// import { withRouter } from 'react-router'
// import { connect } from 'react-redux';
// import { mapDispatchToProps, mapStateToProps } from './AppConnector';
import { Layout, Row, Col } from "antd";
import { Header } from "../";
import { Drawer } from "../";
import { Breadcrumb } from "../";
// import AppConsts from '../../Store/DataState/App/AppConsts';
// import Routes from '../../Routes/Routes';
import { notification } from "antd";
const { Content } = Layout;

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
class App extends Component {
  toggleDrawer = () => {
    this.props.toggleDrawer && this.props.toggleDrawer(!this.props.drawer.show);
  };
  goTo = async path => {
    this.props.history && this.props.history.push(path);
  };
  showNotification = (type, { message, description }) => {
    notification[type]({
      message: message || "Notification Title",
      description: description || ""
    });
  };
  goHome = message => {
    //TODO: will create message to show
    this.props.history && this.props.history.push("/");
  };
  onHeaderSearch = e => {
    this.props.onHeaderSearch && this.props.onHeaderSearch(e, this);
  };
  render() {
    const drawerProps = {
      ...this.props.drawer,
      toggleDrawer: this.toggleDrawer
    };
    const headerProps = {
      ...this.props.header,
      hasDrawer: this.props.hasDrawer,
      toggleDrawer: this.toggleDrawer,
      appName: this.props.appName,
      setSearchValue: this.props.setSearchValue
    };
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Drawer {...drawerProps} />
        <Layout>
          <Header
            {...headerProps}
            {...this.props.pageSettings}
            onSearch={this.onHeaderSearch}
          />
          <Row>
            <Col xs={0} sm={24}>
              {this.props.hasBreadcrumb && (
                <Breadcrumb location={this.props.location} goTo={this.goTo} />
              )}
            </Col>
          </Row>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
