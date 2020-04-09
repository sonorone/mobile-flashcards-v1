import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Card, Title } from 'react-native-paper';

export default class Result extends React.Component {
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
    fontSize: '32px',
    textAlign: 'center',
    marginTop: '.5rem',
    marginLeft: '2rem',
    marginRight: '2rem',
    padding: '2rem',
  },
});
