import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Card, Button } from 'react-native-paper';

export default class Question extends React.Component {
  state = {
    showQuestion: true,
  };

  handleToggle = () => {
    this.setState({
      showQuestion: !this.state.showQuestion,
    });
  };

  render() {
    const { showQuestion } = this.state;
    const { questionText, answerText, answer } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.stage}>Question {this.props.stage}</Text>
        <Card style={styles.button}>
          <Text style={styles.paragraph}>
            {showQuestion ? questionText : answerText}
          </Text>
        </Card>

        <View style={styles.button}>
          <Button onPress={this.handleToggle} style={styles.button}>
            {showQuestion ? 'Show Answer' : 'Show Question'}
          </Button>
          <Button
            onPress={() => this.props.handleSubmit(answer === 'correct')}
            color="green"
            style={styles.button}
            mode="outlined">
            Correct
          </Button>

          <Button
            onPress={() => this.props.handleSubmit(answer === 'incorrect')}
            color="red"
            style={styles.button}
            mode="outlined">
            Incorrect
          </Button>
        </View>
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    margin: '0.5rem',
    padding: '0.5rem',
  },
  stage: {
    alignSelf: 'flex-end',
    padding: '.5rem',
  },
});
