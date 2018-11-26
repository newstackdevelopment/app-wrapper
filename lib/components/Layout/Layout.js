'use strict';

exports.__esModule = true;

var _row = require('antd/es/row');

var _row2 = _interopRequireDefault(_row);

var _col = require('antd/es/col');

var _col2 = _interopRequireDefault(_col);

var _notification2 = require('antd/es/notification');

var _notification3 = _interopRequireDefault(_notification2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _layout = require('antd/es/layout');

var _layout2 = _interopRequireDefault(_layout);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/es/row/style/css');

require('antd/es/col/style/css');

require('antd/es/notification/style/css');

require('antd/es/layout/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { withRouter } from 'react-router'
// import { connect } from 'react-redux';
// import { mapDispatchToProps, mapStateToProps } from './AppConnector';


// import AppConsts from '../../Store/DataState/App/AppConsts';
// import Routes from '../../Routes/Routes';
var Content = _layout2.default.Content;

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        var _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, App);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.toggleDrawer = function () {
            _this.props.toggleDrawer && _this.props.toggleDrawer(!_this.props.drawer.show);
        }, _this.goTo = function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(path) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _this.props.history && _this.props.history.push(path);

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        }(), _this.showNotification = function (type, _ref2) {
            var message = _ref2.message,
                description = _ref2.description;

            _notification3.default[type]({
                message: message || 'Notification Title',
                description: description || ''
            });
        }, _this.goHome = function (message) {
            //TODO: will create message to show
            _this.props.history && _this.props.history.push('/');
        }, _this.onHeaderSearch = function (e) {
            _this.props.onHeaderSearch && _this.props.onHeaderSearch(e, _this);
            // this.props.pageSettings && this.props.pageSettings.onSearch && this.props.pageSettings.onSearch(e, this)
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    // componentDidMount = () => {
    //     this.props.userActions && this.props.userActions.fetchMe();
    // }


    App.prototype.render = function render() {
        var drawerProps = _extends({}, this.props.drawer, {
            toggleDrawer: this.toggleDrawer
        });
        var headerProps = _extends({}, this.props.header, {
            toggleDrawer: this.toggleDrawer,
            appName: this.props.appName,
            setSearchValue: this.props.setSearchValue
        });
        return _react2.default.createElement(
            _layout2.default,
            { style: { minHeight: '100vh' } },
            _react2.default.createElement(_.Drawer, drawerProps),
            _react2.default.createElement(
                _layout2.default,
                null,
                _react2.default.createElement(_.Header, _extends({}, headerProps, this.props.pageSettings, {
                    onSearch: this.onHeaderSearch
                })),
                _react2.default.createElement(
                    _row2.default,
                    null,
                    _react2.default.createElement(
                        _col2.default,
                        { xs: 0, sm: 24 },
                        _react2.default.createElement(_.Breadcrumb, { location: this.props.location, goTo: this.goTo })
                    )
                ),
                _react2.default.createElement(
                    Content,
                    { style: { margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 } },
                    this.props.children
                )
            )
        );
    };

    return App;
}(_react.Component);

exports.default = App;
module.exports = exports['default'];