import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the board state domain
 */

const selectBoardDomain = state => state.allBoards || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Board
 */

const makeSelectBoard = idBoard =>
  createSelector(
    selectBoardDomain,
    substate => substate[idBoard],
  );

export default makeSelectBoard;
export { selectBoardDomain };
