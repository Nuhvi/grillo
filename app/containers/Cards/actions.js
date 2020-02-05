/*
 *
 * Cards actions
 *
 */

import { ADD_CARD, CHANGE_POSITION } from './constants';

export const addCard = (title, idList, newPos) => ({
  type: ADD_CARD,
  title,
  idList,
  newPos,
});

export const changePosCard = ({ idCard, idList, newPos }) => ({
  type: CHANGE_POSITION,
  idCard,
  idList,
  newPos,
});
