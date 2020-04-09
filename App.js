import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Card } from 'react-native-paper';
import Constants from 'expo-constants';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import applyMiddleware from './middleware';

import Question from './components/Question';
import AddCard from './components/AddCard';
import Deck from './components/Deck';
import Result from './components/Result';
import Quiz from './components/Quiz';
import AddDeck from './components/AddDeck';
import DeckList from './components/DeckList';
import DecksNav from './components/DecksNav';
import { setLocalNotification } from './utils/helpers';

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }
  
  render() {
    return (
      <Provider store={createStore(reducer, applyMiddleware)}>
        <View style={styles.container}>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Decks" component={DecksNav} />
              <Tab.Screen name="Add New" component={AddDeck} />
            </Tab.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
