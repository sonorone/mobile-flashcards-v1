import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DeckList from './DeckList';
import Deck from './Deck';
import AddCard from './AddCard';
import Quiz from './Quiz';
import Result from './Result';

const Stack = createStackNavigator();

export default function DecksNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DeckList"
        component={DeckList}
        options={{ title: 'Flash Cards' }}
      />
      <Stack.Screen name="Deck" component={Deck} options={{ title: 'Deck' }} />
      <Stack.Screen
        name="AddCard"
        component={AddCard}
        options={{ title: 'Add Card' }}
      />
      <Stack.Screen name="Quiz" component={Quiz} options={{ title: 'Quiz' }} />
      <Stack.Screen
        name="Result"
        component={Result}
        options={{ title: 'Result' }}
      />
    </Stack.Navigator>
  );
}
