import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Card, Title, Button } from 'react-native-paper';
import { saveQuizResultToStorage } from '../utils/api';
import {
  timeToString,
  clearLocalNotification,
  setLocalNotification,
} from '../utils/helpers';

export default class Result extends React.Component {
  componentDidMount() {
    const { deckName, score } = this.props;
    const dateCompleted = timeToString();

    saveQuizResultToStorage({ deckName, score, dateCompleted });
    clearLocalNotification().then(setLocalNotification);
  }

  render() {
    const { deckName, score, deckId } = this.props;

    return (
      <View style={styles.container}>
        <View>
          <Title style={{ alignSelf: 'center' }}>{deckName}</Title>
        </View>
        <View>
          <Text style={{ alignSelf: 'center' }}>Your Result</Text>
          <Card style={styles.box}>
            <Text>{score} %</Text>
          </Card>
        </View>
        <View>
          <Button onPress={() => this.props.handleStartQuiz(deckId)}>
            Try Again
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
  box: {
    fontSize: 32,
    alignItems: 'center',
    marginTop: 4,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
  },
  button: {},
  text: {},
});
