import { createSelector } from 'reselect';
import _ from 'lodash';
import { initialState } from './reducer';

/**
 * Direct selector to the lists state domain
 */

const selectListsDomain = state => state.allLists || initialState;

const selectBoardLists = idBoard =>
  createSelector(
    selectListsDomain,
    substate => _.filter(substate, list => list.idBoard === idBoard),
  );

/**
 * Other specific selectors
 */

/**
 * Default selector used by Lists
 */

const selectBoardListsOrderedByPos = idBoard =>
  createSelector(
    selectBoardLists(idBoard),
    substate => _.sortBy(substate, list => list.pos),
  );

export default selectBoardListsOrderedByPos;
export { selectBoardLists, selectBoardListsOrderedByPos };
