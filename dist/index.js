"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ngRedux = require("ng-redux");

var _ngRedux2 = _interopRequireDefault(_ngRedux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createDevTools = require("redux-devtools").createDevTools;
var render = require("react-dom").render;
var LogMonitor = require("redux-devtools-log-monitor").default;
var DockMonitor = require("redux-devtools-dock-monitor").default;
var React = require("react");
var Provider = require("react-redux").Provider;

exports.default = angular.module('ngReduxDevtoolsConfigurer', [_ngRedux2.default]).provider('devToolsSync', function () {
    this.developmentTools = createDevTools(React.createElement(
        DockMonitor,
        { toggleVisibilityKey: "ctrl-h", changePositionKey: "ctrl-q", changeMonitorKey: "ctrl-m",
            defaultIsVisible: false },
        React.createElement(LogMonitor, { theme: "tomorrow" })
    ));

    var self = this;

    this.$get = ['$ngRedux', '$rootScope', function ($ngRedux, $rootScope) {

        return {
            start: function start() {

                var componentDidUpdate = DockMonitor.prototype.componentDidUpdate;

                DockMonitor.prototype.componentDidUpdate = function () {
                    $rootScope.$evalAsync();

                    if (componentDidUpdate) {
                        componentDidUpdate.apply(this, arguments);
                    }
                };

                var devTools = document.getElementById("devTools");

                render(React.createElement(
                    Provider,
                    { store: $ngRedux },
                    React.createElement(
                        "div",
                        null,
                        React.createElement(self.developmentTools, null)
                    )
                ), devTools);
            },
            detTools: self.developmentTools
        };
    }];
}).name;
module.exports = exports["default"];