/*
 *
 * Cards reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  '111': {
    id: '111',
    title: 'first Card',
    idList: '11',
  },
  '112': {
    id: '112',
    title: 'second Card',
    idList: '12',
  },
  '121': {
    id: '121',
    title: 'third Card',
    idList: '12',
  },
};

/* eslint-disable default-case, no-param-reassign */
const cardsReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    }
  });

export default cardsReducer;
