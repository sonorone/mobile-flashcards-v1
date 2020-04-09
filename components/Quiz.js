import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Result from './Result';
import Question from './Question';
import { connect } from 'react-redux';
import { Card, Button, TextInput, Title } from 'react-native-paper';

const question = {
  questionText: 'Does React Native work on Android?',
  answerText: 'YES!',
  answer: 'correct',
};
const question2 = {
  questionText: 'Does React Native work on iOS?',
  answerText: 'Yupp!',
  answer: 'correct',
};

class Quiz extends React.Component {
  state = {
    currentQuestion: 1,
    result: 0,
  };

  handleSubmit = isCorrect => {
    const result = isCorrect ? this.state.result + 1 : this.state.result;

    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      result,
    });
  };

  render() {
    const { currentQuestion, result } = this.state;
    const { questions, deck } = this.props;
    const i = currentQuestion - 1;
    const data = questions[i];

    if (currentQuestion - 1 === questions.length) {
      return (
        <Result
          deckName={deck.deckName}
          score={(result / questions.length) * 100}
        />
      );
    }

    return (
      <View style={styles.container}>
        <Title style={{ alignSelf: 'center' }}>{deck.deckName}</Title>
        <Question
          questionText={data.questionText}
          answerText={data.answerText}
          handleSubmit={this.handleSubmit}
          answer={data.answer}
          stage={`${currentQuestion} of ${questions.length}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

function mapStateToProps({ decks, questions }, { route }) {
  const { deckId } = route.params;
  const deckQuestions = [];

  for (const key of Object.keys(questions)) {
    if (questions[key].deckId === deckId) deckQuestions.push(questions[key]);
  }

  return {
    deck: decks[deckId],
    questions: deckQuestions,
  };
}

export default connect(mapStateToProps)(Quiz);
