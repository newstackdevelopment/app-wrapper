import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;
const { Sider } = Layout;
export default class DowDrawer extends Component {
  render() {
    const { theme } = this.props;
    const themeStyle = {
      color: theme === "dark" ? "#ffffff" : "#000000"
    };
    const dividerThemeStyle = {
      backgroundColor: theme === "dark" ? "#ffffff" : "#000000"
    };

    return (
      <Sider
        collapsible
        collapsed={!this.props.show}
        collapsedWidth={0}
        trigger={null}
        breakpoint="lg"
        defaultCollapsed={this.props.show}
      >
        <Menu mode="inline">
          {this.props.menuItems &&
            this.props.menuItems.map((item, itemIndex) => {
              if (!item.menuItems) {
                return [
                  <Menu.Item key={`menuItem${itemIndex}`}>
                    <Link to={item.path} style={themeStyle}>
                      {item.icon && <Icon type={item.icon} />}
                      <span>{item.title}</span>
                    </Link>
                  </Menu.Item>,
                  <Menu.Divider
                    key={`divider${itemIndex}`}
                    style={dividerThemeStyle}
                  />
                ];
              } else {
                return [
                  <SubMenu
                    key={`subMenu${itemIndex}`}
                    title={
                      <span style={themeStyle}>
                        {item.icon && (
                          <Icon type={item.icon} style={themeStyle} />
                        )}
                        <span>{item.title}</span>
                      </span>
                    }
                  >
                    {item.menuItems.map((subItem, subItemIndex) => {
                      return [
                        <Menu.Item key={`subMenuItem${subItemIndex}`}>
                          <Link to={subItem.path} style={themeStyle}>
                            {subItem.icon && <Icon type={subItem.icon} />}
                            <span>{subItem.title}</span>
                          </Link>
                        </Menu.Item>,
                        item.menuItems.length > 0 &&
                        subItemIndex === item.menuItems.length - 1 ? (
                          <Menu />
                        ) : (
                          <Menu.Divider
                            key={`subDivider${subItem.title + subItemIndex}`}
                            style={dividerThemeStyle}
                          />
                        )
                      ];
                    })}
                  </SubMenu>,
                  <Menu.Divider
                    key={`divider${itemIndex}`}
                    style={dividerThemeStyle}
                  />
                ];
              }
            })}
        </Menu>
      </Sider>
    );
  }
}
