import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { connect } from 'react-redux';
import { Card, Button, Title } from 'react-native-paper';

class Deck extends React.Component {
  handleAddCard = () => {
    const { deck } = this.props;

    this.props.navigation.navigate('AddCard', { deckId: deck.id });
  };

  handleStartQuiz = () => {
    const { deck } = this.props;

    this.props.navigation.navigate('Quiz', { deckId: deck.id });
  };

  render() {
    const { id, deckName, count } = this.props.deck;

    return (
      <View style={styles.container}>
        <View>
          <Title style={{ alignSelf: 'center' }}>{deckName}</Title>
          <Text style={{ alignSelf: 'center' }}>
            {count} card{count === 1 ? '' : 's'}
          </Text>
        </View>
        <View style={styles.button}>
          <Button
            onPress={this.handleAddCard}
            color="black"
            mode="outlined"
            style={styles.button}>
            Add Card
          </Button>
          <Button
            onPress={this.handleStartQuiz}
            color="black"
            mode="contained"
            style={styles.button}>
            Start Quiz
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  button: {
    margin: '0.5rem',
    padding: '0.5rem',
  },
});

function mapStateToProps({ decks, questions }, { route }) {
  const { deckId } = route.params;
  let count = 0;

  for (const key of Object.keys(questions)) {
    if (questions[key].deckId === deckId) count++;
  }

  return {
    deck: decks[deckId] ? {...decks[deckId], count} : null,
  };
}

export default connect(mapStateToProps)(Deck);
