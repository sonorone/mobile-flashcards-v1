import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { generateUID } from '../utils/helpers';

const Item = props => {
  const { item, handleNav } = props;

  return (
    <TouchableOpacity onPress={() => handleNav(item.id)}>
      <View style={styles.item}>
        <Text style={styles.title}>{item.deckName}</Text>
        <Text style={styles.smallText}>
          {item.count} card{item.count === 1 ? '' : 's'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

class DeckList extends React.Component {
  handleNavigateDeck = deckId => {
    console.log(deckId);
    this.props.navigation.navigate('Deck', { deckId });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.props.data.length !== 0 ? (
          <FlatList
            data={this.props.data}
            renderItem={({ item }) => {
              return (
                <Item
                  item={item}
                  handleNav={id => this.handleNavigateDeck(id)}
                />
              );
            }}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text style={{ alignSelf: 'center', padding: '2rem', justifyContent: 'center' }}>
            Nothing here at the moment, consider adding a deck and add cards to the deck!
          </Text>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
  smallText: {
    fontSize: 16,
  },
});

function mapStateToProps({ decks }) {
  const decksArray = [];

  for (const key of Object.keys(decks)) {
    decksArray.push(decks[key]);
  }

  return {
    data: decksArray,
  };
}

export default connect(mapStateToProps)(DeckList);
