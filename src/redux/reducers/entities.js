import { entities } from '../actions/types';
import { entities as initialState } from '../store/initial-states';
import mergeState from '../../utils/merge-state';

const addList = (state, action) => {
  const { title, boardId } = action;
  const newListId = Math.floor(Math.random() * 1000000).toString();

  const newState = {
    data: {
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
