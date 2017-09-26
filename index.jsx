let createDevTools = require("redux-devtools").createDevTools;
let render         = require("react-dom").render;
let LogMonitor     = require("redux-devtools-log-monitor").default;
let DockMonitor    = require("redux-devtools-dock-monitor").default;
let React          = require("react");
let Provider       = require("react-redux").Provider;

import ngRedux from 'ng-redux';

export default angular.module('ngReduxDevtoolsConfigurer', [ngRedux])
.provider('devToolsSync', function () {
    this.developmentTools = createDevTools(
        <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q" changeMonitorKey="ctrl-m"
                    defaultIsVisible={false}>
            <LogMonitor theme="tomorrow"/>
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
                        <self.developmentTools />
                    </div>
                </Provider>, devTools);
            },
            detTools : self.developmentTools
        } 
    }]
}).name;