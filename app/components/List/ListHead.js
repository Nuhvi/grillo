import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: ${props => props.theme.spacing(2)}px
    ${props => props.theme.spacing(2)}px;
`;

function ListHead({ children, dragHandleProps }) {
  return (
    <Wrapper {...dragHandleProps}>
      <Typography variant="h5" component="h3">
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
