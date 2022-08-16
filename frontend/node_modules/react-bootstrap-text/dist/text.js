"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Text(props) {
  var getClass = function getClass() {
    var className = props.className || "";
    className += props.align ? " text-".concat(props.align) : "";
    className += props.xs ? " text-xs-".concat(props.xs) : "";
    className += props.sm ? " text-sm-".concat(props.sm) : "";
    className += props.md ? " text-md-".concat(props.md) : "";
    className += props.lg ? " text-lg-".concat(props.lg) : "";
    className += props.xl ? " text-xl-".concat(props.xl) : "";
    className += props.start ? " text-start" : "";
    className += props.center ? " text-center" : "";
    className += props.end ? " text-end" : "";
    className += props.wrap ? " text-wrap" : "";
    className += props.nowrap ? " text-nowrap" : "";
    className += props.lowercase ? " text-lowercase" : "";
    className += props.uppercase ? " text-uppercase" : "";
    className += props.capitalize ? " text-capitalize" : "";
    className += props.size ? " fs-".concat(props.size) : "";
    className += props.bold ? " fw-bold" : "";
    className += props.bolder ? " fw-bolder" : "";
    className += props.normal ? " fw-normal" : "";
    className += props.light ? " fw-light" : "";
    className += props.lighter ? " fw-lighter" : "";
    className += props.italic ? " fst-italic" : "";
    className += props.mono ? " fst-monospace" : "";
    className += props.underline ? " text-decoration-underline" : "";
    className += props.strike ? " text-decoration-line-through" : "";
    className += props.decoration ? " text-decoration-".concat(props.decoration) : "";
    className += props.wordbreak ? " text-break" : "";
    className += props.lineheight ? " lh-".concat(props.lineheight) : "";
    className += props.text ? " text-".concat(props.text) : "";
    className += props.bg ? " bg-".concat(props.bg) : "";
    className += props.reset ? " text-reset" : "";
    className += props.truncate ? " d-inline-block text-truncate" : "";
    return className;
  };

  var CustomTag = "".concat(props.as ? props.as : "p");
  console.log("PROPS", getClass());

  if (props.href) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("a", {
      href: props.href,
      style: props.style ? props.style : {},
      className: getClass()
    }, props.children));
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(CustomTag, {
    style: props.style ? props.style : {},
    className: getClass()
  }, props.children));
}

Text.propTypes = {
  align: _propTypes.default.oneOf(['start', 'center', 'end']),
  xs: _propTypes.default.oneOf(['start', 'center', 'end']),
  sm: _propTypes.default.oneOf(['start', 'center', 'end']),
  md: _propTypes.default.oneOf(['start', 'center', 'end']),
  lg: _propTypes.default.oneOf(['start', 'center', 'end']),
  xl: _propTypes.default.oneOf(['start', 'center', 'end']),
  start: _propTypes.default.bool,
  center: _propTypes.default.bool,
  end: _propTypes.default.bool,
  wrap: _propTypes.default.bool,
  nowrap: _propTypes.default.bool,
  lowercase: _propTypes.default.bool,
  uppercase: _propTypes.default.bool,
  capitalize: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['1', '2', '3', '4', '5', '6']),
  bold: _propTypes.default.bool,
  bolder: _propTypes.default.bool,
  normal: _propTypes.default.bool,
  light: _propTypes.default.bool,
  lighter: _propTypes.default.bool,
  italic: _propTypes.default.bool,
  mono: _propTypes.default.bool,
  decoration: _propTypes.default.oneOf(['underline', 'line-through', 'none']),
  underline: _propTypes.default.bool,
  strike: _propTypes.default.bool,
  wordbreak: _propTypes.default.bool,
  reset: _propTypes.default.bool,
  lineheight: _propTypes.default.oneOf(['1', 'sm', 'base', 'lg']),
  truncate: _propTypes.default.bool,
  text: _propTypes.default.string,
  bg: _propTypes.default.string,
  href: _propTypes.default.string
};
var _default = Text;
exports.default = _default;