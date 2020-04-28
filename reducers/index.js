import {
  RECEIVE_DECKS,
  ADD_DECK,
  REMOVE_DECK,
  ADD_CARD_TO_DECK,
} from '../actions'

export const mflashcards = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK:
      return {
        ...state,
        [action.deckTitle]: {
          title: action.deckTitle,
          questions: [],
        },
      }
    case REMOVE_DECK:
      delete state[action.deck]
      return {
        ...state,
      }
    case ADD_CARD_TO_DECK:
      return {
        ...state,
        [deckTitle]: {
          ...state[deckTitle],
          questions: state[deckTitle.questions].concat(card),
        },
      }
    default:
      return state
  }
}
