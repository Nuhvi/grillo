/*
 *
 * Lists actions
 *
 */

import { ADD_LIST } from './constants';

export const addList = (title, idBoard) => ({
  type: ADD_LIST,
  title,
  idBoard,
});
