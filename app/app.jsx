var React = require('react');
var reactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');

//load custom styles
require('style!css!sass!ApplicationStyles');

reactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Main}>

		</Route>
	</Router>,
	document.getElementById('app')
)