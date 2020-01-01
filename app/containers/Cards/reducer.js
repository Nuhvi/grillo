/*
 *
 * Cards reducer
 *
 */
import produce from 'immer';
import idGenerator from 'utils/lib/idGenerator';
import { ADD_CARD } from './constants';

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
  produce(state, draft => {
    const newId = idGenerator();
    const { title, idList } = action;
    switch (action.type) {
      case ADD_CARD:
        draft[newId] = {
          id: newId,
          title,
          idList,
        };
        break;
    }
  });

export default cardsReducer;
