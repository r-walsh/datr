import React from 'react';
import PureComponent from 'react-pure-render/component';

export default class App extends PureComponent {
	constructor( props ) {
		super( props );

		this.state = {};
	}

	render() {
		return (
			<h1>Hallo!</h1>
		);
	}
}