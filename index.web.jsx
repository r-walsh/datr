import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import 'normalize-css';

import store from './shared/store';

import App from './www/components/App';

document.addEventListener( `DOMContentLoaded`, () => {
	const reactNode = document.getElementById( `react-node` );

	if ( reactNode ) {
		ReactDOM.render(
			<Provider store={ store }>
				<Router history={ browserHistory }>
					<Route path="/" component={ App } />
				</Router>
			</Provider>
		, reactNode );
	}
} );