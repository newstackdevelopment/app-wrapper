'use strict';

exports.__esModule = true;

var _breadcrumb = require('antd/es/breadcrumb');

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

require('antd/es/breadcrumb/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CrumbItem = require('./CrumbItem');

var _CrumbItem2 = _interopRequireDefault(_CrumbItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BreadCrumb = function (_Component) {
  _inherits(BreadCrumb, _Component);

  function BreadCrumb() {
    var _temp, _this, _ret;

    _classCallCheck(this, BreadCrumb);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onCrumbClick = function (item, index) {
      if (_this.props.location) {
        if (item === 'Home') return _this.props.goTo("");
        var pathName = _this.props.location.pathname.split('/');
        var paths = pathName.filter(function (path) {
          return path !== '';
        });
        var toPathArray = paths.slice(0, index + 1);
        var toPath = '/' + toPathArray.join('/');
        _this.props.goTo && _this.props.goTo(toPath);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  BreadCrumb.prototype.render = function render() {
    var _this2 = this;

    var location = this.props.location;

    if (!location) {
      return _react2.default.createElement('div', null);
    }
    var pathName = location.pathname.split('/');
    var paths = pathName.filter(function (path) {
      return path !== '';
    });
    return _react2.default.createElement(
      _breadcrumb2.default,
      { style: { padding: '0 24px', margin: '16px 0px' } },
      _react2.default.createElement(
        _breadcrumb2.default.Item,
        { key: 'breadCrumbHome' },
        _react2.default.createElement(
          _CrumbItem2.default,
          {
            item: 'Home',
            index: 0,
            onCrumbClick: this.onCrumbClick
          },
          'Home'
        )
      ),
      paths && paths.map(function (path, index) {
        return _react2.default.createElement(
          _breadcrumb2.default.Item,
          { key: 'breadCrumb' + index },
          _react2.default.createElement(
            _CrumbItem2.default,
            {
              item: path,
              index: index,
              onCrumbClick: _this2.onCrumbClick
            },
            path
          )
        );
      })
    );
  };

  return BreadCrumb;
}(_react.Component);

exports.default = BreadCrumb;
module.exports = exports['default'];