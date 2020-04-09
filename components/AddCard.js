import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { connect } from 'react-redux';
import { addDeckQuestion } from '../actions';
import {formatQuestion, saveCardToStorage} from '../utils/api'
import { Card, Button, TextInput } from 'react-native-paper';

class AddCard extends React.Component {
  state = {
    questionText: '',
    answerText: '',
  };

  handleSubmit = () => {
    const { deckId } = this.props.route.params;
    const { dispatch, navigation } = this.props;
    const formattedQuestion = formatQuestion({ ...this.state, deckId })

    if (this.state.questionText === '' || this.state.answerText === '') {
      alert('Fields cannot be empty');
      return;
    }

    dispatch(addDeckQuestion(formattedQuestion));
    saveCardToStorage(formattedQuestion);
    navigation.goBack();
  };

  render() {
    const { questionText, answerText } = this.state;

    return (
      <View style={styles.container}>
        <Card>
          <TextInput
            label="Question"
            value={this.state.questionText}
            onChangeText={text => this.setState({ questionText: text })}
          />
          <TextInput
            label="Answer"
            value={this.state.answerText}
            onChangeText={text => this.setState({ answerText: text })}
          />
        </Card>
        <Button onPress={this.handleSubmit} color="black" mode="outlined">
          Submit
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

export default connect()(AddCard);
