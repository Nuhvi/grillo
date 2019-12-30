export const getCard = (state, props) =>
  state.entities.allCards.byId[props.cardId];

export default { getCard };
