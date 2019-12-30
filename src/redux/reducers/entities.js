import { entities } from '../actions/types';
import mergeState from '../../utils/merge-state';

const initialState = {
  pending: false,
  error: null,
  allBoards: {
    byId: {
      '1': {
        title: 'first_board',
      },
    },
  },
  allLists: {
    byId: {
      '1': {
        title: 'first_list',
        boardId: '1',
      },
      '2': {
        title: 'second_list',
        boardId: '1',
      },
      '3': {
        title: 'third_list',
        boardId: '1',
      },
    },
  },
  allCards: {
    byId: {
      '1': {
        title: 'first_card',
        listId: '1',
      },
      '2': {
        title: 'second_card',
        listId: '2',
      },
      '3': {
        title: 'third_card',
        listId: '2',
      },
      '4': {
        title: 'fourth_card',
        listId: '3',
      },
      '5': {
        title: 'fifth_card',
        listId: '3',
      },
      '6': {
        title: 'sixth_card',
        listId: '3',
      },
    },
  },
};

const addList = (state, action) => {
  const { title, boardId } = action;
  const newListId = Math.floor(Math.random() * 1000000).toString();

  const newState = {
    allBoards: {
      byId: {
        [boardId]: {
          boardLists: newListId,
        },
      },
    },
    allLists: {
      byId: {
        [newListId]: { title, cards: [] },
      },
    },
  };

  return mergeState(state, newState);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case entities.ADD_LIST:
      return addList(state, action);
    default:
      return state;
  }
};
