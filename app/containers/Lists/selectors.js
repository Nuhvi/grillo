import { createSelector } from 'reselect';
import _ from 'lodash';
import { initialState } from './reducer';

/**
 * Direct selector to the lists state domain
 */

const selectListsDomain = state => state.allLlists || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Lists
 */

const makeSelectLists = idBoard =>
  createSelector(
    selectListsDomain,
    substate => _.filter(substate, list => list.idBoard === idBoard),
  );

export default makeSelectLists;
export { selectListsDomain };
