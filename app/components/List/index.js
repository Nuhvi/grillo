/**
 *
 * List
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Cards from 'containers/Cards';
import ListTitle from './ListTitle';

import Wrapper from './ListWrapper';

function List(props) {
  const { title, id } = props.list;

  return (
    <div>
      <Wrapper component="article" elevation={4}>
        <ListTitle>{title}</ListTitle>
        <Cards idList={id} />
      </Wrapper>
    </div>
  );
}

List.propTypes = {
  list: PropTypes.object.isRequired,
};

export default memo(List);
