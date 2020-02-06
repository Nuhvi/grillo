import React from 'react';
import CardItem from 'components/Card';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import CardWrapper from './CardWrapper';

const DraggableCards = ({ cards, idList }) => (
  <Droppable droppableId={`${idList}`} type="card">
    {provided => (
      <div
        style={{ height: '100%' }}
        {...provided.droppableProps}
        ref={provided.innerRef}
      >
        {cards.map((card, index) => (
          <Draggable key={card.id} draggableId={`${card.id}`} index={index}>
            {providedDraggable => (
              <CardWrapper
                key={card.id}
                {...providedDraggable.draggableProps}
                ref={providedDraggable.innerRef}
              >
                <CardItem
                  card={card}
                  index={index}
                  dragHandleProps={providedDraggable.dragHandleProps}
                />
              </CardWrapper>
            )}
          </Draggable>
        ))}

        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

DraggableCards.propTypes = {
  cards: PropTypes.array.isRequired,
  idList: PropTypes.string.isRequired,
};

export default DraggableCards;
