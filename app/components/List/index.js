/**
 *
 * List
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Cards from 'containers/Cards';
import { Draggable } from 'react-beautiful-dnd';

import ListHead from './ListHead';
import ListContainer from './ListContainer';

const List = ({ list, draggableIndex }) => {
  const { title, id, idBoard } = list;

  return (
    <Draggable draggableId={id} index={draggableIndex}>
      {provided => (
        <ListContainer
          component="article"
          elevation={4}
          className="list"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <ListHead dragHandleProps={provided.dragHandleProps}>
            {title}
          </ListHead>
          <Cards idList={id} idBoard={idBoard} index={draggableIndex} />
        </ListContainer>
      )}
    </Draggable>
  );
};

List.propTypes = {
  list: PropTypes.object.isRequired,
  draggableIndex: PropTypes.number,
};

export default memo(List);
