import _ from 'lodash';

const getNewPos = (collection, source, destination) => {
  let beforeOrAfterPos =
    destination > source
      ? _.last(collection).pos + 100000
      : collection[0].pos - 100000;

  let itemAfterOrBeforeDestination = null;
  const shift = destination > source ? +1 : -1;
  itemAfterOrBeforeDestination = collection[destination + shift];
  if (itemAfterOrBeforeDestination)
    beforeOrAfterPos = itemAfterOrBeforeDestination.pos;

  const destinationPos = collection[destination].pos;

  return (destinationPos + beforeOrAfterPos) / 2;
};

export default getNewPos;
