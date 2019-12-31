import { createSelector } from 'reselect';
import _ from 'lodash';
import { initialState } from './reducer';

/**
 * Direct selector to the cards state domain
 */

const selectCardsDomain = state => state.allCards || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Cards
 */

const makeSelectCards = idList =>
  createSelector(
    selectCardsDomain,
    substate => _.filter(substate, card => card.idList === idList),
  );

export default makeSelectCards;
export { selectCardsDomain };
