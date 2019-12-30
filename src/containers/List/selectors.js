import { createSelector } from 'reselect';
import _ from 'lodash';

const getListId = (_, props) => props.listId;
const getList = (state, props) => state.entities.allLists.byId[props.listId];
const getAllCards = state => state.entities.allCards.byId;

export const getListWithCards = createSelector(
  getListId,
  getList,
  getAllCards,
  (listId, list, allCards) => {
    const cardIds = [];
    _.forEach(allCards, (card, cardId) => {
      if (card.listId === listId) cardIds.push(cardId);
    });

    return { ...list, cardIds };
  },
);

export default { getListWithCards };
