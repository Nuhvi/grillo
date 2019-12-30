import { createSelector } from 'reselect';
import _ from 'lodash';

const getBoardId = (_, props) => props.boardId;
const getBoard = (state, props) => state.entities.allBoards.byId[props.boardId];
const getAllLists = state => state.entities.allLists.byId;

export const getBoardWithLists = createSelector(
  getBoardId,
  getBoard,
  getAllLists,
  (boardId, board, allLists) => {
    const listIds = [];
    _.forEach(allLists, (list, listId) => {
      if (list.boardId === boardId) listIds.push(listId);
    });

    return { ...board, listIds };
  },
);

export default { getBoardWithLists };
