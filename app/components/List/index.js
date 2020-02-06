/**
 *
 * List
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

import ListHead from './ListHead';
import ListContainer from './ListContainer';

const List = ({ list, draggableIndex, children }) => {
  const { title, id } = list;

  return (
    <Draggable draggableId={id} index={draggableIndex}>
      {provided => (
        <ListContainer
          component="article"
          elevation={0}
          className="list"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <ListHead dragHandleProps={provided.dragHandleProps}>
            {title}
          </ListHead>
          {children}
        </ListContainer>
      )}
    </Draggable>
  );
};

List.propTypes = {
  list: PropTypes.object.isRequired,
  draggableIndex: PropTypes.number,
  children: PropTypes.node,
};

export default memo(List);
