import React, {
	  AppRegistry
	, Component
	, NavigatorIOS
	, StyleSheet
} from 'react-native';

import LandingRoute from './components.ios/LandingRoute';

class App extends Component {
	render() {
		const styles = this.getStyles();

		return (
			<NavigatorIOS
				initialRoute={ {
					  component: LandingRoute
					, title: `I am Test`
				} }
				navigationBarHidden
				style={ styles.container }
			/>
		);
	}

	getStyles() {
		return StyleSheet.create( {
			container: {
				flex: 1
			}
		} );
	}
}

AppRegistry.registerComponent( `datr`, () => App );