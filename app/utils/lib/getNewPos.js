const getNewPos = (collection, source, destination) => {
  let destinationIndex = destination.index;

  if (source.droppableId === destination.droppableId) {
    const shift = source.index > destination.index ? 0 : 1;
    destinationIndex += shift;
  }

  const itemBeforeDestination = collection[destinationIndex - 1];
  const itemAtDestination = collection[destinationIndex];

  if (!itemAtDestination) {
    return itemBeforeDestination ? itemBeforeDestination.pos + 100 : 0;
  }
  return itemBeforeDestination
    ? (itemBeforeDestination.pos + itemAtDestination.pos) / 2
    : itemAtDestination.pos - 100;
};

export default getNewPos;
