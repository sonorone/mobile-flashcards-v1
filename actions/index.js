export const GET_DECKS = 'GET_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const GET_DECK_QUESTIONS = 'GET_DECK_QUESTIONS';
export const ADD_DECK_QUESTION = 'ADD_DECK_QUESTION';

export function getDecks() {
  return {
    type: GET_DECKS,
  };
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  };
}

export function getDeckQuestions(id) {
  return {
    type: GET_DECK_QUESTIONS,
    id,
  };
}

export function addDeckQuestion(question) {
  return {
    type: ADD_DECK_QUESTION,
    question,
  };
}
