'use strict';

exports.__esModule = true;
exports.default = undefined;

var _icon = require('antd/es/icon');

var _icon2 = _interopRequireDefault(_icon);

var _layout = require('antd/es/layout');

var _layout2 = _interopRequireDefault(_layout);

var _menu = require('antd/es/menu');

var _menu2 = _interopRequireDefault(_menu);

require('antd/es/icon/style/css');

require('antd/es/layout/style/css');

require('antd/es/menu/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubMenu = _menu2.default.SubMenu;
var Sider = _layout2.default.Sider;

var DowDrawer = function (_Component) {
    _inherits(DowDrawer, _Component);

    function DowDrawer() {
        _classCallCheck(this, DowDrawer);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    DowDrawer.prototype.render = function render() {
        return _react2.default.createElement(
            Sider,
            {
                collapsible: true,
                collapsed: !this.props.show,
                collapsedWidth: 0,
                trigger: null,
                breakpoint: 'lg',
                defaultCollapsed: this.props.show
            },
            _react2.default.createElement(
                _menu2.default,
                { mode: 'inline' },
                this.props.menuItems && this.props.menuItems.map(function (item, itemIndex) {
                    if (!item.menuItems) {
                        return _react2.default.createElement(
                            _menu2.default.Item,
                            { key: 'menuItem' + itemIndex },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: item.path },
                                item.icon && _react2.default.createElement(_icon2.default, { type: item.icon }),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    item.title
                                )
                            )
                        );
                    } else {
                        return _react2.default.createElement(
                            SubMenu,
                            {
                                key: 'subMenu' + itemIndex,
                                title: _react2.default.createElement(
                                    'span',
                                    null,
                                    item.icon && _react2.default.createElement(_icon2.default, { type: item.icon }),
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        item.title
                                    )
                                )
                            },
                            item.menuItems.map(function (subItem, subItemIndex) {
                                return _react2.default.createElement(
                                    _menu2.default.Item,
                                    { key: 'subMenuItem' + subItemIndex },
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: subItem.path },
                                        subItem.icon && _react2.default.createElement(_icon2.default, { type: subItem.icon }),
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            subItem.title
                                        )
                                    )
                                );
                            })
                        );
                    }
                })
            )
        );
    };

    return DowDrawer;
}(_react.Component);

exports.default = DowDrawer;
module.exports = exports['default'];