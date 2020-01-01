/*
 *
 * Lists actions
 *
 */

import { ADD_LIST, CHANGE_POSITION } from './constants';

export const addList = (title, idBoard) => ({
  type: ADD_LIST,
  title,
  idBoard,
});

export const changePosList = (collection, source, destination) => {
  const idList = collection[source].id;

  const destinationPos = collection[destination].pos;
  let itemAfterOrBeforeDestination = null;
  let beforeOrAfterPos = destination > source ? 999999 : 0;

  if (destination > source) {
    itemAfterOrBeforeDestination = collection[destination + 1];
    if (itemAfterOrBeforeDestination)
      beforeOrAfterPos = itemAfterOrBeforeDestination.pos;
  } else {
    itemAfterOrBeforeDestination = collection[destination - 1];
    if (itemAfterOrBeforeDestination)
      beforeOrAfterPos = itemAfterOrBeforeDestination.pos;
  }

  const newPos = (destinationPos + beforeOrAfterPos) / 2;

  return {
    type: CHANGE_POSITION,
    idList,
    newPos,
  };
};
