import { AsyncStorage } from 'react-native';
import { generateUID } from './helpers';

const FLASHCARDS_STORAGE_DECKS_KEY = 'Flashcards:DecksKey';
const FLASHCARDS_STORAGE_QUESTIONS_KEY = 'Flashcards:CardsKey';
const FLASHCARDS_STORAGE_QUIZ_RESULTS_KEY = 'Flashcards:QuizResultsKey';

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

export function fetchQuizResults() {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_QUIZ_RESULTS_KEY);
  //.then(formatCalendarResults)
}

export function fetchDecks() {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_DECKS_KEY);
  //.then(formatCalendarResults)
}

export function fetchCardQuestions() {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_QUESTIONS_KEY);
  //.then(formatCalendarResults)
}

export function saveQuizResultToStorage(quizResult) {
  console.log(JSON.stringify(quizResult));

  return AsyncStorage.mergeItem(
    FLASHCARDS_STORAGE_QUIZ_RESULTS_KEY,
    JSON.stringify({
      [quizResult.dateCompleted]: quizResult,
    })
  );
}

export function saveDeckToStorage(deck) {
  return AsyncStorage.mergeItem(
    FLASHCARDS_STORAGE_DECKS_KEY,
    JSON.stringify({
      [deck.id]: deck,
    })
  );
}

export function saveCardToStorage(card) {
  return AsyncStorage.mergeItem(
    FLASHCARDS_STORAGE_QUESTIONS_KEY,
    JSON.stringify({
      [card.id]: card,
    })
  );
}
