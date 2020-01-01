const getNewPos = (collection, source, destination) => {
  const destinationPos = collection[destination].pos;
  let itemAfterOrBeforeDestination = null;
  const shift = destination > source ? +1 : -1;
  let beforeOrAfterPos = destination > source ? 999999 : 0;

  itemAfterOrBeforeDestination = collection[destination + shift];

  if (itemAfterOrBeforeDestination)
    beforeOrAfterPos = itemAfterOrBeforeDestination.pos;

  return (destinationPos + beforeOrAfterPos) / 2;
};

export default getNewPos;
