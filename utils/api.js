import { AsyncStorage } from 'react-native';
import { generateUID } from './helpers';

const FLASHCARDS_STORAGE_DECKS_KEY = 'Flashcards:DecksKey'
const FLASHCARDS_STORAGE_QUESTIONS_KEY = 'Flashcards:CardsKey'

export function formatDeck(deckName) {
  return {
    id: generateUID(),
    deckName,
    count: 0,
  };
}

export function formatQuestion(deck) {
  return {
    id: generateUID(),
    ...deck,
  };
}

export function saveDeckToStorage(deck) {
  return AsyncStorage.mergeItem(
    FLASHCARDS_STORAGE_DECKS_KEY,
    JSON.stringify({
      [deck.id]: deck
    })
  );
}

export function saveCardToStorage(card) {
  return AsyncStorage.mergeItem(
    FLASHCARDS_STORAGE_QUESTIONS_KEY,
    JSON.stringify({
      [card.id]: card
    })
  );
}