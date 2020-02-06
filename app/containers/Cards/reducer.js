/*
 *
 * Cards reducer
 *
 */
import produce from 'immer';
import idGenerator from 'utils/lib/idGenerator';
import { ADD_CARD, CHANGE_POSITION } from './constants';

export const initialState = {
  '111': {
    id: '111',
    title: 'first Card',
    idList: '11',
    pos: 10000,
  },
  '112': {
    id: '112',
    title: 'second Card',
    idList: '12',
    pos: 20000,
  },
  '121': {
    id: '121',
    title: 'third Card',
    idList: '12',
    pos: 30000,
  },
};

/* eslint-disable default-case, no-param-reassign */
const cardsReducer = (state = initialState, action) =>
  produce(state, draft => {
    const { title, idCard, idList, newPos } = action;
    const newId = idGenerator();
    switch (action.type) {
      case ADD_CARD:
        draft[newId] = {
          id: newId,
          title,
          idList,
          pos: newPos,
        };
        break;
      case CHANGE_POSITION:
        draft[idCard].pos = newPos;
        draft[idCard].idList = idList;
        break;
    }
  });

export default cardsReducer;
