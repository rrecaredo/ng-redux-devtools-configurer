module.exports = angular.module('ngReduxDevtoolsConfigurer', [])
.provider('devToolsSync', function () {
	this.$get =  function() {
		return {
			start: function() {},
			devTools: undefined
		}
	};
}).name;