import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: ${props => props.theme.spacing(1)}px
    ${props => props.theme.spacing(2)}px;
  margin-bottom: ${props => props.theme.spacing(2)}px;

  text-transform: capitalize;

  background: #f4f4f4;
  border-radius: 10px;
`;

function ListHead({ children, dragHandleProps }) {
  return (
    <Wrapper {...dragHandleProps}>
      <Typography variant="h5" component="h4">
        {children}
      </Typography>
    </Wrapper>
  );
}

ListHead.propTypes = {
  children: PropTypes.string,
  dragHandleProps: PropTypes.shape({}).isRequired,
};

export default ListHead;
