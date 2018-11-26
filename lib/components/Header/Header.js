'use strict';

exports.__esModule = true;
exports.default = undefined;

var _row = require('antd/es/row');

var _row2 = _interopRequireDefault(_row);

var _col = require('antd/es/col');

var _col2 = _interopRequireDefault(_col);

var _button = require('antd/es/button');

var _button2 = _interopRequireDefault(_button);

var _input = require('antd/es/input');

var _input2 = _interopRequireDefault(_input);

var _layout = require('antd/es/layout');

var _layout2 = _interopRequireDefault(_layout);

require('antd/es/row/style/css');

require('antd/es/col/style/css');

require('antd/es/button/style/css');

require('antd/es/input/style/css');

require('antd/es/layout/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = _layout2.default.Header;
var Search = _input2.default.Search;

var ENTER = 13;

var DowHeader = function (_Component) {
    _inherits(DowHeader, _Component);

    function DowHeader() {
        var _temp, _this, _ret;

        _classCallCheck(this, DowHeader);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.setSearchValue = function (e) {
            var code = e.keyCode || e.charCode;
            return code === ENTER ? _this.props.onSearch && _this.props.onSearch(e) : _this.props.setSearchValue(e.target.value);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    DowHeader.prototype.render = function render() {
        var props = this.props;

        return _react2.default.createElement(
            Header,
            { style: { padding: 0 } },
            _react2.default.createElement(
                _row2.default,
                null,
                props.toggleDrawer && _react2.default.createElement(
                    _col2.default,
                    {
                        onClick: props.toggleDrawer,
                        xs: 3, sm: 2, md: 2, lg: 1, xl: 1,
                        style: { 'textAlign': 'center' }
                    },
                    _react2.default.createElement(_button2.default, {
                        ghost: true,
                        icon: false ? 'menu-unfold' : 'menu-fold',
                        size: 'large',
                        style: { 'borderStyle': 'none' }
                    })
                ),
                _react2.default.createElement(
                    _col2.default,
                    {
                        xs: 0, sm: 0, md: 7, lg: 6, xl: 4,
                        style: { 'textAlign': 'center' }
                    },
                    props.logo && _react2.default.createElement('img', { src: props.logo.src, alt: props.logo.alt ? props.logo.alt : "missing alt" })
                ),
                _react2.default.createElement(
                    _col2.default,
                    {
                        xs: 12, sm: 8, md: 6, lg: 6, xl: 4
                    },
                    _react2.default.createElement(
                        'h1',
                        null,
                        props.appName || "Default App"
                    )
                ),
                _react2.default.createElement(
                    _col2.default,
                    {
                        xs: 0, sm: 7, md: 6, lg: 4, xl: 4,
                        style: { 'textAlign': 'center', 'float': 'right' }
                    },
                    this.props.onSearch && _react2.default.createElement(Search, {
                        placeholder: 'input search text',
                        onSearch: props.onSearch,
                        onKeyUp: this.setSearchValue,
                        style: { width: 200 }
                    })
                )
            )
        );
    };

    return DowHeader;
}(_react.Component);

exports.default = DowHeader;
module.exports = exports['default'];