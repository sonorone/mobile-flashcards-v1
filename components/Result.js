import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableWithNativeFeedback,
} from 'react-native';
import Constants from 'expo-constants';
import { Card, Title } from 'react-native-paper';
import { saveQuizResultToStorage } from '../utils/api';
import {
  timeToString,
  clearLocalNotification,
  setLocalNotification,
} from '../utils/helpers';

const Touchable =
  Platform.OS === 'iOS' ? TouchableOpacity : TouchableWithNativeFeedback;

const Button = ({ props }) => (
  <Touchable style={styles.button} onPress={props.onPress}>
    <Text style={styles.text}>Press me</Text>
  </Touchable>
);

export default class Result extends React.Component {
  componentDidMount() {
    const { deckName, score } = this.props;
    const dateCompleted = timeToString();

    saveQuizResultToStorage({ deckName, score, dateCompleted });
    clearLocalNotification().then(setLocalNotification);
  }

  render() {
    const { deckName, score } = this.props;

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
    textAlign: 'center',
    marginTop: 1,
    marginLeft: 3,
    marginRight: 3,
    padding: 3,
  },
  button: {},
  text: {},
});
