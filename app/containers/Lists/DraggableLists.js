import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import List from 'components/List';

function DraggableLists({ lists, onChangePosList }) {
  const onDragEnd = result => {
    if (result.destination.index === result.source.index) return;

    if (result.type === 'list') {
      const source = result.source.index;
      const destination = result.destination.index;
      onChangePosList(lists, source, destination);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId="all-droppables"
        direction="horizontal"
        type="list"
      >
        {provided => (
          <div
            style={{ display: 'flex' }}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {lists.map((list, index) => (
              <div key={list.id}>
                <List list={list} draggableIndex={index} />
              </div>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

DraggableLists.propTypes = {
  lists: PropTypes.array.isRequired,
  onChangePosList: PropTypes.func.isRequired,
};

export default DraggableLists;
