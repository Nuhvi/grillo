import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const ListsWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

ListsWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListsWrapper;
