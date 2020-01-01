/*
 *
 * Lists actions
 *
 */

import getNewPos from 'utils/lib/getNewPos';

import { ADD_LIST, CHANGE_POSITION } from './constants';

export const addList = (title, idBoard, newPos) => ({
  type: ADD_LIST,
  title,
  idBoard,
  newPos,
});

export const changePosList = (lists, source, destination) => ({
  type: CHANGE_POSITION,
  idList: lists[source].id,
  newPos: getNewPos(lists, source, destination),
});
