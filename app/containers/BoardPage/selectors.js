import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the boardPage state domain
 */

const selectBoardPageDomain = state => state.boardPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BoardPage
 */

const makeSelectBoardPage = () =>
  createSelector(
    selectBoardPageDomain,
    substate => substate,
  );

export default makeSelectBoardPage;
export { selectBoardPageDomain };
