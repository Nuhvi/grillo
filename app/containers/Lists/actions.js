/*
 *
 * Lists actions
 *
 */

import getNewPos from 'utils/lib/getNewPos';

import { ADD_LIST, CHANGE_POSITION } from './constants';

export const addList = (title, idBoard) => ({
  type: ADD_LIST,
  title,
  idBoard,
});

export const changePosList = (collection, source, destination) => ({
  type: CHANGE_POSITION,
  idList: collection[source].id,
  newPos: getNewPos(collection, source, destination),
});
