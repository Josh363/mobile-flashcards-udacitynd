import { AsyncStorage } from 'react-native'
import { decks } from './_DATA'

const DECK_STORAGE_KEY = 'MFlashcards:decks'

export const getDecks = async () => {
  try {
    const storedDecks = await AsyncStorage.getItem(DECK_STORAGE_KEY)
    if (storedDecks === null) {
      await AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
    }
    return storedDecks === null ? decks : JSON.parse(storedDecks)
  } catch (err) {
    console.warn(err)
  }
}

export const getDeck = async (key) => {
  try {
    const storedDecks = await AsyncStorage.getItem(DECK_STORAGE_KEY)
    return JSON.parse(storedDecks)[key]
  } catch (err) {
    console.warn(err)
  }
}

export const saveDeck = async (title) => {
  try {
    await AsyncStorage.mergeItem(
      DECK_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          title,
          questions: [],
        },
      })
    )
  } catch (err) {
    console.warn(err)
  }
}

export const removeDeck = async (title) => {
  try {
    const storedDecks = await AsyncStorage.getItem(DECK_STORAGE_KEY)
    const formattedDecks = JSON.parse(storedDecks)
    delete formattedDecks[title]
    await AsyncStorage.setItem(
      DECKS_STORAGE_KEY,
      JSON.stringify(formattedDecks)
    )
  } catch (err) {
    console.warn(err)
  }
}

export const saveCardToDeck = async (title, card) => {
  try {
    const deck = await getDeck(title)

    await AsyncStorage.mergeItem(
      DECK_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          questions: [...deck.questions].concat(card),
        },
      })
    )
  } catch (err) {
    console.warn(err)
  }
}
