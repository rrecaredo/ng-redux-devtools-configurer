import angular from 'angular';

export default angular.module('ngReduxDevtoolsConfig')
.provider('devToolsSync', function () {
	return {
		start : () => {};
		devtool : undefined;
	}
}).name;