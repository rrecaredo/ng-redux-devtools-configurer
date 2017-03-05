let createDevTools       = require("redux-devtools").createDevTools;
let render               = require("react-dom").render;
let LogMonitor           = require("redux-devtools-log-monitor").default;
let DockMonitor          = require("redux-devtools-dock-monitor").default;
let React                = require("react");
let Provider             = require("react-redux").Provider;
let SliderMonitor        = require("redux-slider-monitor");

import angular from 'angular';
import ngRedux from 'ng-redux';

export default angular.module('ngReduxDevtoolsConfig', [ngRedux])
.provider('devToolsSync', function () {
    this.DevelopmentTools = createDevTools(
        <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q" changeMonitorKey="ctrl-m"
                    defaultIsVisible={false}>
            <LogMonitor theme="tomorrow"/>
            <SliderMonitor keyboardEnabled/>
        </DockMonitor>
    );

    let self = this;

    this.$get = ['$ngRedux', '$rootScope',  function ($ngRedux, $rootScope) {
        
        return {
            start: () => {

                let componentDidUpdate = DockMonitor.prototype.componentDidUpdate;

                DockMonitor.prototype.componentDidUpdate = function () {
                    $rootScope.$evalAsync();

                    if (componentDidUpdate) {
                        componentDidUpdate.apply(this, arguments);
                    }
                };

                let devTools = document.getElementById("devTools");

                render(<Provider store={$ngRedux}>
                    <div>
                        <developmentTools />
                    </div>
                </Provider>, devTools);
            },
            detTools : developmentTools
        } 
    }]
}).name;