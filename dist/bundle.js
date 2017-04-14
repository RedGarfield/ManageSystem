webpackJsonp([0],{

/***/ 1039:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(471);
module.exports = __webpack_require__(472);


/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

__webpack_require__(726);

__webpack_require__(507);

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

__webpack_require__(723);

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

__webpack_require__(159);

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

__webpack_require__(725);

__webpack_require__(73);

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

__webpack_require__(730);

__webpack_require__(73);

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

__webpack_require__(734);

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

__webpack_require__(736);

__webpack_require__(64);

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = __webpack_require__(167);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _reactRouterDom = __webpack_require__(94);

var _login = __webpack_require__(585);

var _login2 = _interopRequireDefault(_login);

var _main = __webpack_require__(586);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//引入react-router
var history = (0, _createBrowserHistory2.default)();

var DefaultLayout = function DefaultLayout() {
  return _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    { history: history },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _login2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/main', component: _main2.default })
    )
  );
};

_reactDom2.default.render(_react2.default.createElement(DefaultLayout, null), document.getElementById("react-content"));

/***/ }),

/***/ 472:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

__webpack_require__(720);

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

__webpack_require__(722);

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

__webpack_require__(724);

__webpack_require__(64);

__webpack_require__(229);

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

__webpack_require__(159);

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

__webpack_require__(728);

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

__webpack_require__(729);

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

__webpack_require__(731);

__webpack_require__(533);

__webpack_require__(64);

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

__webpack_require__(732);

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

__webpack_require__(159);

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

__webpack_require__(733);

__webpack_require__(64);

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

__webpack_require__(735);

__webpack_require__(530);

__webpack_require__(209);

__webpack_require__(214);

__webpack_require__(224);

__webpack_require__(524);

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _css = __webpack_require__(73);

var _button = __webpack_require__(41);

var _button2 = _interopRequireDefault(_button);

var _css2 = __webpack_require__(210);

var _col = __webpack_require__(97);

var _col2 = _interopRequireDefault(_col);

var _css3 = __webpack_require__(229);

var _timePicker = __webpack_require__(227);

var _timePicker2 = _interopRequireDefault(_timePicker);

var _css4 = __webpack_require__(500);

var _datePicker = __webpack_require__(211);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _css5 = __webpack_require__(126);

var _form = __webpack_require__(99);

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

var _util = __webpack_require__(588);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _form2.default.Item;
var MonthPicker = _datePicker2.default.MonthPicker;
var RangePicker = _datePicker2.default.RangePicker;

var TimeRelatedForm = function (_React$Component) {
    _inherits(TimeRelatedForm, _React$Component);

    function TimeRelatedForm(props) {
        _classCallCheck(this, TimeRelatedForm);

        var _this = _possibleConstructorReturn(this, (TimeRelatedForm.__proto__ || Object.getPrototypeOf(TimeRelatedForm)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(TimeRelatedForm, [{
        key: 'setStartTime',
        value: function setStartTime(time, timestr) {
            var hours = [],
                minutes = [],
                getHour = +timestr.toString().split(":")[0];
            for (var i = 0, len = +timestr.toString().split(":")[0]; i < len; i++) {
                // 筛选出禁止选择的结束小时
                hours.push(i);
            }
            for (var _i = 0, _len = +timestr.toString().split(":")[1]; _i < _len; _i++) {
                // 筛选出禁止选择的结束分钟
                minutes.push(_i);
            }
        }
    }, {
        key: 'setEndTime',
        value: function setEndTime(time, timestr) {
            var hours = [],
                minutes = [],
                getHour = +timestr.toString().split(":")[0];
            for (var i = +timestr.toString().split(":")[0]; i <= 24; i++) {
                // 筛选出禁止选择的开始小时
                hours.push(i);
            }
            for (var _i2 = +timestr.toString().split(":")[1]; _i2 <= 60; _i2++) {
                // 筛选出禁止选择的开始分钟
                minutes.push(_i2);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var getFieldDecorator = this.props.form.getFieldDecorator;

            var formItemLayout = {
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 8 }
                },
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 16 }
                }
            };
            var config = {
                rules: [{ type: 'object', required: true, message: '请选择时间!' }]
            };
            return _react2.default.createElement(
                _form2.default,
                { onSubmit: this.handleSubmit },
                _react2.default.createElement(
                    FormItem,
                    _extends({}, formItemLayout, { label: '\u8425\u4E1A\u65F6\u95F4' }),
                    _react2.default.createElement(
                        _col2.default,
                        { span: '4', style: { textAlign: "center" } },
                        getFieldDecorator('date-time-picker1', config)(_react2.default.createElement(_timePicker2.default, { value: this.props.starttime, onChange: this.setStartTime.bind(this),
                            format: 'HH:mm', placeholder: '\u5F00\u59CB\u65F6\u95F4',
                            defaultValue: (0, _moment2.default)({ hour: 0, minute: 0 }) }))
                    ),
                    _react2.default.createElement(
                        _col2.default,
                        { span: '1' },
                        _react2.default.createElement(
                            'p',
                            { className: 'ant-form-split' },
                            '-'
                        )
                    ),
                    _react2.default.createElement(
                        _col2.default,
                        { span: '4', style: { textAlign: "center" } },
                        getFieldDecorator('date-time-picker2', config)(_react2.default.createElement(_timePicker2.default, { value: this.props.endtime, onChange: this.setEndTime.bind(this),
                            format: 'HH:mm', placeholder: '\u7ED3\u675F\u65F6\u95F4',
                            defaultValue: (0, _moment2.default)({ hour: 23, minute: 59 }) }))
                    )
                ),
                _react2.default.createElement(
                    FormItem,
                    { wrapperCol: {
                            xs: { span: 24, offset: 0 },
                            sm: { span: 16, offset: 8 }
                        } },
                    _react2.default.createElement(
                        _button2.default,
                        { type: 'primary', htmlType: 'submit', size: 'large' },
                        'Submit'
                    )
                )
            );
        }
    }]);

    return TimeRelatedForm;
}(_react2.default.Component);

TimeRelatedForm.propTypes = {
    starttime: (0, _moment2.default)({ hour: 0, minute: 0 }),
    endtime: (0, _moment2.default)({ hour: 23, minute: 59 })
};

var AddForm = _form2.default.create()(TimeRelatedForm);

exports.default = AddForm;

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _css = __webpack_require__(224);

var _spin = __webpack_require__(132);

var _spin2 = _interopRequireDefault(_spin);

var _css2 = __webpack_require__(73);

var _button = __webpack_require__(41);

var _button2 = _interopRequireDefault(_button);

var _css3 = __webpack_require__(209);

var _checkbox = __webpack_require__(49);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _css4 = __webpack_require__(64);

var _input = __webpack_require__(63);

var _input2 = _interopRequireDefault(_input);

var _css5 = __webpack_require__(127);

var _icon = __webpack_require__(14);

var _icon2 = _interopRequireDefault(_icon);

var _css6 = __webpack_require__(221);

var _modal = __webpack_require__(129);

var _modal2 = _interopRequireDefault(_modal);

var _css7 = __webpack_require__(126);

var _form = __webpack_require__(99);

var _form2 = _interopRequireDefault(_form);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = __webpack_require__(167);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _form2.default.Item;

var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login(props) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.state = {
            loading: false
        };

        _this.handleSubmit = function (e) {
            e.preventDefault();
            var self = _this;
            self.props.form.validateFields(function (err, values) {
                if (!err) {
                    self.setState({ loading: true }); // 打开登录旋转
                    fetch(__dirname + 'login?username=' + values.userName + '&password=' + values.password, {
                        method: 'POST'
                    }).then(function (res) {
                        return res.json().then(function (data) {
                            // 获取服务器返回的json对象
                            return data;
                        });
                    }).then(function (data) {
                        if (data.success === true) {
                            // 如果验证用户信息正确，就跳转到系统首页
                            self.props.history.push("/main");
                        } else {
                            self.setState({ loading: false }); // 关闭登录旋转
                            self.showModal(data.message);
                        }
                    }).catch(function (e) {
                        console.error(e);
                        self.setState({ loading: false }); // 关闭登录旋转
                    });
                }
            });
        };

        _this.showModal = function (message) {
            _modal2.default.error({
                title: '系统提示',
                content: message
            });
        };

        return _this;
    }

    _createClass(Login, [{
        key: 'render',
        value: function render() {
            var getFieldDecorator = this.props.form.getFieldDecorator;

            return _react2.default.createElement(
                _spin2.default,
                { spinning: this.state.loading, tip: '\u6B63\u5728\u767B\u5F55...' },
                _react2.default.createElement(
                    _form2.default,
                    { onSubmit: this.handleSubmit, className: 'login-form' },
                    _react2.default.createElement(
                        FormItem,
                        null,
                        getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入账号!' }]
                        })(_react2.default.createElement(_input2.default, { prefix: _react2.default.createElement(_icon2.default, { type: 'user', style: { fontSize: 13 } }), placeholder: '\u8BF7\u8F93\u5165\u8D26\u53F7!' }))
                    ),
                    _react2.default.createElement(
                        FormItem,
                        null,
                        getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }]
                        })(_react2.default.createElement(_input2.default, { prefix: _react2.default.createElement(_icon2.default, { type: 'lock', style: { fontSize: 13 } }), type: 'password', placeholder: '\u8BF7\u8F93\u5165\u5BC6\u7801!' }))
                    ),
                    _react2.default.createElement(
                        FormItem,
                        null,
                        getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true
                        })(_react2.default.createElement(
                            _checkbox2.default,
                            null,
                            '\u8BB0\u4F4F\u5BC6\u7801'
                        )),
                        _react2.default.createElement(
                            _button2.default,
                            { type: 'primary', htmlType: 'submit', className: 'login-form-button' },
                            '\u767B\u5F55'
                        )
                    )
                )
            );
        }
    }]);

    return Login;
}(_react2.default.Component);

var LoginForm = _form2.default.create()(Login);

exports.default = LoginForm;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _css = __webpack_require__(214);

var _dropdown = __webpack_require__(98);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _css2 = __webpack_require__(127);

var _icon = __webpack_require__(14);

var _icon2 = _interopRequireDefault(_icon);

var _css3 = __webpack_require__(517);

var _menu = __webpack_require__(128);

var _menu2 = _interopRequireDefault(_menu);

var _css4 = __webpack_require__(514);

var _layout = __webpack_require__(218);

var _layout2 = _interopRequireDefault(_layout);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(94);

var _syslog = __webpack_require__(587);

var _syslog2 = _interopRequireDefault(_syslog);

var _AddForm = __webpack_require__(584);

var _AddForm2 = _interopRequireDefault(_AddForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 引入antd

// 引入react-router


var Header = _layout2.default.Header,
    Content = _layout2.default.Content,
    Footer = _layout2.default.Footer,
    Sider = _layout2.default.Sider;

var SubMenu = _menu2.default.SubMenu;

var Main = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main(props) {
        _classCallCheck(this, Main);

        var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

        _this.setRoute = { // 组件菜单映射
            'syslog': _syslog2.default,
            'addForm': _AddForm2.default
        };

        _this.onCollapse = function (collapsed) {
            _this.setState({
                collapsed: collapsed,
                mode: collapsed ? 'vertical' : 'inline'
            });
        };

        _this.componentArr = [];
        _this.state = {
            collapsed: false,
            mode: 'inline',
            userName: 'lxy',
            menuArr: []
        };
        return _this;
    }

    _createClass(Main, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // 组件加载完毕后，请求菜单
            var self = this;
            fetch(__dirname + "menuList", {
                method: "post"
            }).then(function (res) {
                return res.json().then(function (data) {
                    // 获取服务器返回的json对象
                    return data;
                });
            }).then(function (data) {
                if (data.isLogin === true) {
                    // 如果验证用户信息正确，就跳转到主页面，并且加载菜单
                    self.setState({ "menuArr": self.setMenu(data.list) });
                } else {
                    self.props.history.push("/"); // 未登录跳转登录
                }
            }).catch(function (e) {
                console.error(e);
                self.props.history.push("/"); // 出错或者超时跳转登录
            });
        }
    }, {
        key: 'onLoginOut',
        value: function onLoginOut(_ref) {
            var key = _ref.key;
            // 登出方法
            if (key === "loginout") {
                alert("退出登录");
            }
        }
    }, {
        key: 'dropdownMenu',
        value: function dropdownMenu() {
            // 用户信息下拉菜单
            return _react2.default.createElement(
                _menu2.default,
                { onClick: this.onLoginOut.bind(this) },
                _react2.default.createElement(
                    _menu2.default.Item,
                    { key: 'loginout' },
                    '\u9000\u51FA\u8D26\u53F7'
                )
            );
        }
    }, {
        key: 'setMenu',
        value: function setMenu(obj) {
            // 设置侧边栏菜单
            var arr = [],
                _self = this;
            _self.componentArr.length = 0; // 由于setState会导致render重绘，所以需要将构造器中动态改变的值重置
            for (var i = 0, len = obj.length; i < len; i++) {
                // 循环遍历菜单
                if (obj[i].children && obj[i].children.length > 0) {
                    // 如果有子菜单
                    var templeMenu = function setSon(sonMenu) {
                        // 菜单递归函数
                        var sonMenuArr = [];
                        for (var j = 0, len1 = sonMenu.children.length; j < len1; j++) {
                            // 如果子菜单红包含子菜单就调用递归去遍历
                            if (sonMenu.children[j].children && sonMenu.children[j].children.length > 0) {
                                sonMenuArr.push(setSon(sonMenu.children[j]));
                            } else {
                                // 没有再次包含子菜单就直接设置
                                _self.componentArr.push({ path: sonMenu.children[j].path, component: sonMenu.children[j].component }); // 获取菜单数据的路径和组件
                                sonMenuArr.push(_react2.default.createElement(
                                    _menu2.default.Item,
                                    { key: sonMenu.children[j].title },
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: sonMenu.children[j].path },
                                        _react2.default.createElement(_icon2.default, { type: 'user' }),
                                        sonMenu.children[j].title
                                    )
                                ));
                            }
                        }
                        // 返回该层级的顶层子菜单
                        return _react2.default.createElement(
                            SubMenu,
                            { key: sonMenu.title, title: _react2.default.createElement(
                                    'span',
                                    null,
                                    _react2.default.createElement(_icon2.default, { type: 'user' }),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'nav-text' },
                                        sonMenu.title
                                    )
                                ) },
                            sonMenuArr
                        );
                    }(obj[i]);
                    arr.push(templeMenu);
                } else {
                    // 没有子菜单
                    _self.componentArr.push({ path: obj[i].path, component: obj[i].component }); // 获取菜单数据的路径和组件
                    arr.push(_react2.default.createElement(
                        _menu2.default.Item,
                        { key: obj[i].title },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: obj[i].path },
                            _react2.default.createElement(_icon2.default, { type: 'user' }),
                            obj[i].title
                        )
                    ));
                }
            }
            return arr;
        }
    }, {
        key: 'render',
        value: function render() {
            var _target = this,
                // 获取this
            // getMenu = _target.setMenu(_target.state.menuArr),
            dropdownMenu = _target.dropdownMenu();
            return _react2.default.createElement(
                _layout2.default,
                null,
                _react2.default.createElement(
                    Header,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'top-logo1' },
                        _react2.default.createElement('img', { src: 'img/logo.png', alt: 'logo' })
                    ),
                    _react2.default.createElement(
                        _dropdown2.default,
                        { overlay: dropdownMenu },
                        _react2.default.createElement(
                            'a',
                            { className: 'ant-dropdown-link', href: 'javascript:void(0);' },
                            '\u6B22\u8FCE\u60A8\uFF0C',
                            this.state.userName,
                            ' ',
                            _react2.default.createElement(_icon2.default, { type: 'down' })
                        )
                    )
                ),
                _react2.default.createElement(
                    _layout2.default,
                    null,
                    _react2.default.createElement(
                        Sider,
                        { breakpoint: 'lg', collapsible: true, collapsed: this.state.collapsed, onCollapse: this.onCollapse, collapsedWidth: '0' },
                        _react2.default.createElement(
                            _menu2.default,
                            { theme: 'dark', mode: this.state.mode, defaultSelectedKeys: ['6'] },
                            this.state.menuArr
                        )
                    ),
                    _react2.default.createElement(
                        _layout2.default,
                        { style: { background: '#f1f3f6' } },
                        _react2.default.createElement(
                            Content,
                            { style: { padding: "10px 24px", margin: 0 } },
                            _react2.default.createElement(_reactRouterDom.Redirect, { to: '/main/addForm' }),
                            this.componentArr.map(function (cur, index, arr) {
                                var component = _target.setRoute[cur.component];
                                return _react2.default.createElement(_reactRouterDom.Route, { key: index, path: cur.path, component: component, onEnter: true });
                            })
                        ),
                        _react2.default.createElement(
                            Footer,
                            { style: { textAlign: 'right' } },
                            '@author lxy'
                        )
                    )
                )
            );
        }
    }]);

    return Main;
}(_react2.default.Component);

exports.default = Main;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _css = __webpack_require__(221);

var _modal = __webpack_require__(129);

var _modal2 = _interopRequireDefault(_modal);

var _css2 = __webpack_require__(544);

var _table = __webpack_require__(226);

var _table2 = _interopRequireDefault(_table);

var _css3 = __webpack_require__(64);

var _input = __webpack_require__(63);

var _input2 = _interopRequireDefault(_input);

var _css4 = __webpack_require__(532);

var _row = __webpack_require__(131);

var _row2 = _interopRequireDefault(_row);

var _css5 = __webpack_require__(210);

var _col = __webpack_require__(97);

var _col2 = _interopRequireDefault(_col);

var _css6 = __webpack_require__(492);

var _card = __webpack_require__(207);

var _card2 = _interopRequireDefault(_card);

var _css7 = __webpack_require__(487);

var _breadcrumb = __webpack_require__(204);

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _css8 = __webpack_require__(73);

var _button = __webpack_require__(41);

var _button2 = _interopRequireDefault(_button);

var _css9 = __webpack_require__(127);

var _icon = __webpack_require__(14);

var _icon2 = _interopRequireDefault(_icon);

var _css10 = __webpack_require__(126);

var _form = __webpack_require__(99);

var _form2 = _interopRequireDefault(_form);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(94);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//引入react-router


var FormItem = _form2.default.Item;

// rowSelection object indicates the need for row selection
var rowSelection = {
	onChange: function onChange(selectedRowKeys, selectedRows) {
		console.log('selectedRowKeys: ' + selectedRowKeys, 'selectedRows: ', selectedRows);
	},
	onSelect: function onSelect(record, selected, selectedRows) {
		console.log(record, selected, selectedRows);
	},
	onSelectAll: function onSelectAll(selected, selectedRows, changeRows) {
		console.log(selected, selectedRows, changeRows);
	},
	getCheckboxProps: function getCheckboxProps(record) {
		return {
			disabled: record.name === 'Disabled User' };
	}
};

var Syslog = function (_React$Component) {
	_inherits(Syslog, _React$Component);

	function Syslog(props) {
		_classCallCheck(this, Syslog);

		var _this = _possibleConstructorReturn(this, (Syslog.__proto__ || Object.getPrototypeOf(Syslog)).call(this, props));

		_this.getColumns = function () {
			var obj = _this;
			return [{
				title: 'Name',
				dataIndex: 'name',
				width: 150
			}, {
				title: 'Age',
				dataIndex: 'age',
				width: 150
			}, {
				title: 'Address',
				dataIndex: 'address'
			}, {
				title: 'Action',
				key: 'operation',
				width: 100,
				render: function render(event) {
					return _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							_button2.default,
							{ type: 'primary', onClick: obj.showModal.bind(obj, event) },
							_react2.default.createElement(_icon2.default, { type: 'search' }),
							'\u67E5\u770B'
						)
					);
				}
			}];
		};

		_this.showModal = function (event) {
			console.log(event);
			_this.setState({ visible: true });
		};

		_this.handleOk = function (e) {
			_this.setState({
				visible: false
			});
		};

		_this.handleCancel = function (e) {
			_this.setState({
				visible: false
			});
		};

		_this.state = {
			getDataArr: [],
			visible: false
		};
		return _this;
	}

	_createClass(Syslog, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			// 请求数据
			var self = this;
			fetch(__dirname + 'query/sysLogList', {
				method: 'POST'
			}).then(function (res) {
				return res.json().then(function (data) {
					// 获取服务器返回的json对象
					return data;
				});
			}).then(function (data) {
				if (data.isLogin === true) {
					// 如果验证用户信息正确，就跳转到主页面
					self.setState({ "getDataArr": data.list });
				} else {
					self.props.history.push("/"); // 未登录跳转登录
				}
			}).catch(function (e) {
				console.error(e);
				self.props.history.push("/"); // 出错或者超时跳转登录
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'panel' },
				_react2.default.createElement(
					_row2.default,
					null,
					_react2.default.createElement(
						_col2.default,
						{ span: 24 },
						_react2.default.createElement(
							_card2.default,
							{ bordered: false },
							_react2.default.createElement(
								'h2',
								null,
								'\u65E5\u5FD7\u7BA1\u7406'
							),
							_react2.default.createElement(
								_breadcrumb2.default,
								{ style: { textAlign: 'right' } },
								_react2.default.createElement(
									_breadcrumb2.default.Item,
									null,
									'\u9996\u9875'
								),
								_react2.default.createElement(
									_breadcrumb2.default.Item,
									null,
									'\u65E5\u5FD7\u7BA1\u7406'
								),
								_react2.default.createElement(
									_breadcrumb2.default.Item,
									null,
									'\u65E5\u5FD7\u67E5\u8BE2'
								)
							)
						)
					)
				),
				_react2.default.createElement(
					_row2.default,
					null,
					_react2.default.createElement(
						_col2.default,
						{ span: 24 },
						_react2.default.createElement(
							_card2.default,
							{ bordered: false },
							_react2.default.createElement(
								_form2.default,
								{ className: 'searchForm', layout: 'inline' },
								_react2.default.createElement(
									FormItem,
									null,
									_react2.default.createElement(_input2.default, { placeholder: '\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u5B57' })
								),
								_react2.default.createElement(
									FormItem,
									null,
									_react2.default.createElement(
										_button2.default,
										{ type: 'primary', htmlType: 'submit' },
										_react2.default.createElement(_icon2.default, { type: 'search' }),
										'\u641C\u7D22'
									)
								)
							)
						)
					)
				),
				_react2.default.createElement(
					_row2.default,
					null,
					_react2.default.createElement(
						_col2.default,
						{ span: 24 },
						_react2.default.createElement(
							_card2.default,
							{ bordered: false },
							_react2.default.createElement(_table2.default, { rowSelection: rowSelection, columns: this.getColumns(), size: 'small', dataSource: this.state.getDataArr, pagination: { pageSize: 15 } })
						)
					)
				),
				_react2.default.createElement(_modal2.default, { title: 'Basic Modal', visible: this.state.visible, onOk: this.handleOk, onCancel: this.handleCancel })
			);
		}
	}]);

	return Syslog;
}(_react2.default.Component);

exports.default = Syslog;

/*
不能使用此写法去绑定按钮事件，使用该写法时，this指向render，render的词法作用域已经被改变不再指向class组件
columns = [{
	title: 'Name',
	dataIndex: 'name',
	width: 150
}, {
	title: 'Age',
	dataIndex: 'age',
	width: 150
}, {
	title: 'Address',
	dataIndex: 'address'
},{
    title: 'Action',
    key: 'operation',
    width: 100,
    render(event){
    	return(
    	<div>
    		<Button type="primary" onClick={console.log(this)}><Icon type="search" />查看</Button>
    	</div>
    	)
	}
}]
*/
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UtilBar = function () {
	function UtilBar() {
		_classCallCheck(this, UtilBar);
	}

	_createClass(UtilBar, [{
		key: "compareTime",

		/*
   * 提供通用方法
   * 1、时间范围比较
   */
		value: function compareTime(start, end) {
			var tag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "<";
			// 时间的范围比较
			if (start === "" || end === "" || start === null || end === null || start === undefined || end === undefined) {
				return true;
			}
			var startValue = +start.toString().replace(":", ""),
			    endValue = +end.toString().replace(":", "");
			if (tag === "<=") {
				return startValue <= endValue ? true : false;
			} else {
				return startValue < endValue ? true : false;
			}
		}
	}]);

	return UtilBar;
}();

var getUtilBar = new UtilBar();
exports.default = getUtilBar;

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

__webpack_require__(727);

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

__webpack_require__(721);

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 732:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[1039]);