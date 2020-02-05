/**
 *
 * CardItem
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Card, Typography } from '@material-ui/core';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Wrapper = styled(Card)`
  max-height: 100%;
  padding: 0 ${props => props.theme.spacing(2)}px;
`;

const CardItem = ({ card, index }) => {
  const { title, id } = card;

  return (
    <Draggable draggableId={`${id}`} index={index}>
      {provided => (
        <Wrapper
          component="article"
          variant="outlined"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Typography variant="h6" component="h4">
            {title}
          </Typography>
        </Wrapper>
      )}
    </Draggable>
  );
};

CardItem.propTypes = {
  card: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default memo(CardItem);
