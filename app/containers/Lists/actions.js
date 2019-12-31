/*
 *
 * Lists actions
 *
 */

import { ADD_LIST } from './constants';

export const addList = title => ({
  type: ADD_LIST,
  title,
});
