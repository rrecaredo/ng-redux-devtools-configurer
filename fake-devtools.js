export default angular.module('ngReduxDevtoolsConfigurer')
.provider('devToolsSync', function () {
	this.$get = () => {
		start: () => {},
		devTools: undefined
	};
}).name;