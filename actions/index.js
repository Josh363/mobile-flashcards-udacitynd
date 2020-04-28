export const handleInitialData = () => async (dispatch) => {
  const decks = await getDecks()
  dispatch(receiveDecks(decks))
}
