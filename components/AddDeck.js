import * as React from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import { formatDeck, saveDeckToStorage } from '../utils/api';
import { Card, Button, TextInput, Title } from 'react-native-paper';

class AddDeck extends React.Component {
  state = {
    deckName: '',
  };

  handleSubmit = () => {
    const { deckName } = this.state;
    const {dispatch, navigation} = this.props;
    const deck = formatDeck(deckName);

    if (deckName === '') {
      alert('Field cannot be empty');
      return;
    }

    dispatch(addDeck(deck));
    saveDeckToStorage(deck);

    this.setState({ deckName: '' });
    navigation.navigate('DeckList');
  };

  render() {
    const { deckName } = this.state;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Title style={{ textAlign: 'center' }}>
          What is the title of your new deck?
        </Title>
        <View>
          <Card style={styles.form}>
            <TextInput
              label="Deck Name"
              value={this.state.deckName}
              onChangeText={text => this.setState({ deckName: text })}
            />
          </Card>
          <Button
            style={styles.form}
            onPress={this.handleSubmit}
            color="black"
            mode="outlined">
            Create Deck
          </Button>
        </View>
      </KeyboardAvoidingView>
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
  form: {
    margin: '.5rem',
  },
});

export default connect(({ decks }) => ({ decks }))(AddDeck);
