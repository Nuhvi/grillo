import { entities } from '../actions/types';
import { entities as initialState } from '../store/initial-states';
import mergeState from '../../utils/merge-state';

const addList = (state, action) => {
  const { title, projectId } = action;
  const newListId = Math.floor(Math.random() * 1000000).toString();

  const newState = {
    data: {
      allProjects: {
        byId: {
          [projectId]: {
            projectLists: newListId,
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
