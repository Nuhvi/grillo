import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem;
  border: 1px solid black;
`;

const ListComponent = ({ title }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
    </Wrapper>
  );
};

ListComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ListComponent;
