import angular from 'angular';

export default angular.module('ngReduxDevtoolsConfigurer')
.provider('devToolsSync', function () {
	return {
		start : () => {};
		devtool : undefined;
	}
}).name;