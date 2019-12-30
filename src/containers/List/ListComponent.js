import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../Card';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem;
  border: 1px solid black;
`;

const ListComponent = ({ title, cardIds }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      {cardIds.map(cardId => {
        return <Card key={cardId} cardId={cardId} />;
      })}
    </Wrapper>
  );
};

ListComponent.propTypes = {
  title: PropTypes.string.isRequired,
  cardIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListComponent;
