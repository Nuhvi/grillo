/*
 *
 * Lists reducer
 *
 */
import produce from 'immer';
import { ADD_LIST } from './constants';

export const initialState = {
  '11': {
    id: '11',
    title: 'todo',
    idBoard: '1',
  },
  '12': {
    id: '12',
    title: 'doing',
    idBoard: '1',
  },
  '13': {
    id: '13',
    title: 'done',
    idBoard: '1',
  },
  '21': {
    id: '21',
    title: 'todo',
    idBoard: '2',
  },
  '22': {
    id: '22',
    title: 'doing',
    idBoard: '2',
  },
  '23': {
    id: '23',
    title: 'done',
    idBoard: '2',
  },
};

/* eslint-disable default-case, no-param-reassign */
const listsReducer = (state = initialState, action) =>
  produce(state, draft => {
    const newId = Math.floor(Math.random() * 100000);
    switch (action.type) {
      case ADD_LIST:
        draft[newId] = { id: newId, title: action.title, idBoard: '1' };
        break;
    }
  });

export default listsReducer;
