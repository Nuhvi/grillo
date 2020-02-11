/*
 *
 * Cards actions
 *
 */

import { ADD_CARD, CHANGE_POSITION } from './constants';

export const addCard = ({ title, idList, lastCard }) => ({
  type: ADD_CARD,
  title,
  idList,
  newPos: lastCard ? lastCard.pos + 100 : 0,
});

export const changePosCard = ({ idCard, idList, newPos }) => ({
  type: CHANGE_POSITION,
  idCard,
  idList,
  newPos,
});
