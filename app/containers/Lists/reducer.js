/*
 *
 * Lists reducer
 *
 */
import produce from 'immer';
import idGenerator from 'utils/idGenerator';
import { ADD_LIST, CHANGE_POSITION } from './constants';

export const initialState = {
  '11': {
    id: '11',
    title: 'done',
    idBoard: '1',
    pos: 30000,
  },
  '13': {
    id: '13',
    title: 'doing',
    idBoard: '1',
    pos: 20000,
  },
  '12': {
    id: '12',
    title: 'todo',
    idBoard: '1',
    pos: 10000,
  },
  '21': {
    id: '21',
    title: 'todo',
    idBoard: '2',
    pos: 40000,
  },
  '22': {
    id: '22',
    title: 'doing',
    idBoard: '2',
    pos: 50000,
  },
  '23': {
    id: '23',
    title: 'done',
    idBoard: '2',
    pos: 60000,
  },
};

/* eslint-disable default-case, no-param-reassign */
const listsReducer = (state = initialState, action) =>
  produce(state, draft => {
    const newId = idGenerator();
    const { title, idBoard, idList, newPos } = action;
    switch (action.type) {
      case ADD_LIST:
        draft[newId] = {
          id: newId,
          title,
          idBoard,
        };
        break;
      case CHANGE_POSITION:
        draft[idList].pos = newPos;
        break;
    }
  });

export default listsReducer;
