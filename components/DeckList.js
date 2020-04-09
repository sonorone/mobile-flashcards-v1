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
import { connect } from 'react-redux';
import { fetchQuizResults } from '../utils/api';

const Item = (props) => {
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
  state = {
    quizResults: null,
  };

  componentDidMount() {}

  fetchQuizResults = () => {
    const results = fetchQuizResults();

    this.setState({
      quizResults: results,
    });

    console.log('Fetch quiz results: ');
    console.log(JSON.stringify(results));
  };

  handleNavigateDeck = (deckId) => {
    console.log(deckId);
    this.props.navigation.navigate('Deck', { deckId });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text onPress={this.fetchQuizResults}>Fetch</Text>

        <Text>
          {typeof this.state.quizResults !== undefined
            ? JSON.stringify(this.state.quizResults)
            : ''}
        </Text>

        {this.props.data.length !== 0 ? (
          <FlatList
            data={this.props.data}
            renderItem={({ item }) => {
              return (
                <Item
                  item={item}
                  handleNav={(id) => this.handleNavigateDeck(id)}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text
            style={{
              alignSelf: 'center',
              padding: 3,
              justifyContent: 'center',
            }}
          >
            Nothing here at the moment, consider adding a deck and add cards to
            the deck!
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
