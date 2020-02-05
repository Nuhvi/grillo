import { createSelector } from 'reselect';
import _ from 'lodash';
import { initialState } from './reducer';

/**
 * Direct selector to the lists state domain
 */

export const selectListsDomain = state => state.allLists || initialState;

export const selectBoardLists = idBoard =>
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

export const selectBoardListsOrderedByPos = idBoard =>
  createSelector(
    selectBoardLists(idBoard),
    substate => _.sortBy(substate, list => list.pos),
  );

export default selectBoardListsOrderedByPos;
