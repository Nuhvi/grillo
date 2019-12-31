/*
 *
 * Board reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  '1': {
    id: '1',
    title: 'grillo',
  },
  '2': {
    id: '2',
    title: 'otherBoard',
  },
};

/* eslint-disable default-case, no-param-reassign */
const boardReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    }
  });

export default boardReducer;
