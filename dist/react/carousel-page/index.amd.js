define(['react'], function (React$1) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$2 = ".prev {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  margin-top: -13px;\n  width: 36px;\n  height: 36px;\n  z-index: 2;\n  color: #fff;\n}\n.next {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  margin-top: -13px;\n  width: 36px;\n  height: 36px;\n  z-index: 2;\n  color: #fff;\n}\n";
  styleInject(css_248z$2);

  function CarouselArrow(_ref) {
    var handlePrev = _ref.handlePrev,
        handleNext = _ref.handleNext;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "prev",
      onClick: handlePrev
    }, "<"), /*#__PURE__*/React.createElement("div", {
      className: "next",
      onClick: handleNext
    }, ">"));
  }

  var css_248z$1 = "ul {\n  padding: 0;\n  margin: 0;\n}\n.react-comp-carousel {\n  width: 50%;\n  background-color: #99a9bf;\n  position: relative;\n  overflow: hidden;\n}\n.react-comp-carousel .carousel {\n  top: 0;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n  text-align: center;\n  background-color: #00965E;\n}\n.react-comp-carousel .prev {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  margin-top: -13px;\n  width: 36px;\n  height: 36px;\n  z-index: 2;\n  color: #fff;\n}\n.react-comp-carousel .next {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  margin-top: -13px;\n  width: 36px;\n  height: 36px;\n  z-index: 2;\n  color: #fff;\n}\n.react-comp-carousel .nav {\n  position: absolute;\n  bottom: 10px;\n  z-index: 2;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.react-comp-carousel .nav .nav-item {\n  display: inline-block;\n  border-radius: 50%;\n  background-color: #FFF;\n  width: 10px;\n  height: 10px;\n  padding: 2px;\n  opacity: 0.4;\n}\n.react-comp-carousel .nav .nav-item:not(:last-child) {\n  margin-right: 5px;\n}\n.react-comp-carousel .nav .is-active {\n  opacity: 1;\n}\n";
  styleInject(css_248z$1);

  function Carousel(_ref) {
    var height = _ref.height,
        width = _ref.width,
        images = _ref.images;
    var carouselStyle = {
      height: height,
      width: width
    };
    var liRef = React$1.useRef(null);

    var _useState = React$1.useState(images),
        _useState2 = _slicedToArray(_useState, 2),
        data = _useState2[0],
        setData = _useState2[1];

    React$1.useEffect(function () {
      var list = data.map(function (item, index) {
        item.xPort = index * liRef.current.offsetWidth;
        return _objectSpread2({}, item);
      });
      setData(list);
    }, []);

    var handlePrev = function handlePrev() {
      var domWidth = Math.abs(liRef.current.offsetWidth);
      var domCount = data.length;
      var maxWidth = (domCount - 1) * domWidth - domWidth;
      var list = data.map(function (item) {
        if (item.xPort > maxWidth) {
          item.xPort = 0;
        } else {
          item.xPort = item.xPort + domWidth;
        }

        return _objectSpread2({}, item);
      });
      setData(list);
    };

    var handleNext = function handleNext() {
      var domWidth = Math.abs(liRef.current.offsetWidth);
      var domCount = data.length;
      var list = data.map(function (item) {
        if (item.xPort < 0) {
          item.xPort = (domCount - 1) * domWidth - domWidth;
        } else {
          item.xPort = item.xPort - domWidth;
        }

        return _objectSpread2({}, item);
      });
      setData(list);
    };

    return /*#__PURE__*/React.createElement("div", {
      style: carouselStyle,
      className: "react-comp-carousel"
    }, /*#__PURE__*/React.createElement(CarouselArrow, {
      handlePrev: handlePrev,
      handleNext: handleNext
    }), data.map(function (item) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          transform: item.xPort ? "translateX(".concat(item.xPort, "px)") : "translateX(0px)"
        },
        ref: liRef,
        className: "carousel",
        key: item.key
      }, /*#__PURE__*/React.createElement("img", {
        src: item.value,
        style: _objectSpread2(_objectSpread2({}, carouselStyle), {}, {
          backgroundSize: 'cover'
        })
      }));
    }));
  }

  var css_248z = "";
  styleInject(css_248z);

  var images = [{
    key: 1,
    value: 'https://img2.baidu.com/it/u=1373267526,2283944957&fm=26&fmt=auto&gp=0.jpg'
  }, {
    key: 2,
    value: 'https://img0.baidu.com/it/u=3618816023,901057022&fm=26&fmt=auto&gp=0.jpg'
  }, {
    key: 3,
    value: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201504%2F08%2F20150408180059_SQLkR.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628846724&t=f8ee5b53368dc96190b90b9a2b34ccf9'
  }];
  var height = 200;
  var width = 320;
  function CarouselPage() {
    return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(Carousel, {
      height: height,
      width: width,
      images: images
    }));
  }

  return CarouselPage;

});
