import { combineReducers } from 'redux';
import {
  GET_DECKS,
  ADD_DECK,
  GET_DECK_QUESTIONS,
  ADD_DECK_QUESTION,
} from '../actions';

export default combineReducers({
  decks,
  questions,
});

function decks(state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
      };
    case ADD_DECK:
      return {
        ...state,
        [action.deck.id]: action.deck,
      };
    default:
      return state;
  }
}

function questions(state = {}, action) {
  switch (action.type) {
    case GET_DECK_QUESTIONS:
      return {
        ...state,
      };
    case ADD_DECK_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    default:
      return state;
  }
}
