/**
 *
 * List
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Cards from 'containers/Cards';
import { Card, Typography, CardContent } from '@material-ui/core';
import styled from 'styled-components';

const Wrapper = styled(Card)`
  width: ${props => `${props.theme.spacing(40)}px`};

  max-height: 100%;
  white-space: normal;
`;

function List(props) {
  const { title, id } = props.list;

  return (
    <Wrapper component="article">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          {title}
        </Typography>
      </CardContent>
      <Cards idList={id} />
    </Wrapper>
  );
}

List.propTypes = {
  list: PropTypes.object.isRequired,
};

export default memo(List);
