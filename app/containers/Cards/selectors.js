import { createSelector } from 'reselect';
import _ from 'lodash';
import { selectListsDomain } from 'containers/Lists/selectors';
import { initialState } from './reducer';

/**
 * Direct selector to the cards state domain
 */

export const selectCardsDomain = state => state.allCards || initialState;

/**
 * Other specific selectors
 */

export const makeSelectBoardCards = idBoard =>
  createSelector(
    selectListsDomain,
    selectCardsDomain,
    (allLists, allCards) => {
      const boardLists = _.filter(allLists, list => list.idBoard === idBoard);
      const idBoardLists = _.map(boardLists, list => list.id);
      return _.filter(allCards, card => idBoardLists.includes(card.idList));
    },
  );

/**
 * Default selector used by Cards
 */

export const makeSelectCards = idList =>
  createSelector(
    selectCardsDomain,
    allCards => _.filter(allCards, card => card.idList === idList),
  );

export default makeSelectCards;
