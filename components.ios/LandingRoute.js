import React, {
	  Component
	, StyleSheet
	, Text
	, TouchableHighlight
	, View
} from 'react-native';

export default class LandingRoute extends Component {
	render() {
		const styles = this.getStyles();

		return (
			<View style={ styles.container }>

				<TouchableHighlight
					onPress={ () => null }
					style={ styles.selectorItem }
					underlayColor="#557067"
				>
					<View style={ styles.selectorItem }>
						<Text style={ styles.itemTitle }>TV</Text>
					</View>
				</TouchableHighlight>

				<TouchableHighlight
					onPress={ () => null }
					style={ styles.selectorItem }
					underlayColor="#557067"
				>
					<View style={ styles.selectorItem }>
						<Text style={ styles.itemTitle }>Theatres</Text>
					</View>
				</TouchableHighlight>

				<TouchableHighlight
					onPress={ () => null }
					style={ styles.selectorItem }
					underlayColor="#557067"
				>
					<View style={ styles.selectorItem }>
						<Text style={ styles.itemTitle }>DVD</Text>
					</View>
				</TouchableHighlight>

				<TouchableHighlight
					onPress={ () => null }
					style={ styles.selectorItem }
					underlayColor="#557067"
				>
					<View style={ styles.selectorItem }>
						<Text style={ styles.itemTitle }>Books</Text>
					</View>
				</TouchableHighlight>

				<TouchableHighlight
					onPress={ () => null }
					style={ styles.selectorItem }
					underlayColor="#557067"
				>
					<View style={ styles.selectorItem }>
						<Text style={ styles.itemTitle }>Music</Text>
					</View>
				</TouchableHighlight>

			</View>
		);
	}

	getStyles() {
		return StyleSheet.create( {
			container: {
				  alignItems: `center`
				, backgroundColor: `#4b4c4c`
				, flex: 1
				, justifyContent: `center`
				, marginTop: 25
			}
			, selectorItem: {
				  alignSelf: `stretch`
				, borderBottomWidth: 1
				, borderColor: `black`
				, flex: 1
				, height: 60
				, justifyContent: `center`
			}
			, itemTitle: {
				  alignSelf: `center`
				, color: `#ae9b95`
				, fontSize: 20
			}
		} );
	}
}

