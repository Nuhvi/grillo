/*
 *
 * Cards actions
 *
 */

import { ADD_CARD } from './constants';

export const addCard = (title, idList) => ({
  type: ADD_CARD,
  title,
  idList,
});
