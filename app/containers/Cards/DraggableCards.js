import React from 'react';
import CardItem from 'components/Card';
import { Droppable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import CardWrapper from './CardWrapper';

const DraggableCards = ({ cards, idList }) => (
  <Droppable droppableId={`${idList}`} type="card">
    {provided => (
      <div {...provided.droppableProps} ref={provided.innerRef}>
        {cards.map((card, index) => (
          <CardWrapper key={card.id}>
            <CardItem card={card} index={index} />
          </CardWrapper>
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
