const RECEIVE_DECKS = 'RECEIVE_DECKS'
const ADD_DECK = 'ADD_DECK'
const REMOVE_DECK = 'REMOVE_DECK'
const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'

export const receiveDecks = (decks) => {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export const addDeck = (deckTitle) => {
  return {
    type: ADD_DECK,
    deckTitle,
  }
}

export const removeDeck = (deck) => {
  return {
    type: REMOVE_DECK,
    deck,
  }
}

export const addCardToDeck = (deckTitle, card) => {
  return {
    type: ADD_CARD_TO_DECK,
    deckTitle,
    card,
  }
}

export const handleInitialData = () => async (dispatch) => {
  const decks = await getDecks()
  dispatch(receiveDecks(decks))
}
