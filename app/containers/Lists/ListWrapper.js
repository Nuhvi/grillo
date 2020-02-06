import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  max-width: 352px;
  padding: 0 ${props => props.theme.spacing(2)}px;
  box-sizing: border-box;
`;

const ListWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

ListWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListWrapper;
