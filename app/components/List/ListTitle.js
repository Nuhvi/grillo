import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: ${props => props.theme.spacing(4)}px
    ${props => props.theme.spacing(2)}px;
`;

function ListTitle({ children }) {
  return (
    <Wrapper>
      <Typography variant="h5" component="h3">
        {children}
      </Typography>
    </Wrapper>
  );
}

ListTitle.propTypes = {
  children: PropTypes.string,
};

export default ListTitle;
