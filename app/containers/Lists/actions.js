/*
 *
 * Lists actions
 *
 */

import { ADD_LIST, CHANGE_POSITION } from './constants';

export const addList = (title, idBoard, newPos) => ({
  type: ADD_LIST,
  title,
  idBoard,
  newPos,
});

export const changePosList = ({ idList, newPos }) => ({
  type: CHANGE_POSITION,
  idList,
  newPos,
});
