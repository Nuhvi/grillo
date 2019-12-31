/**
 *
 * List
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Cards from '../../Cards';
function List({ list }) {
  const { title, id } = list;

  return (
    <div>
      <h2>{title}</h2>
      <Cards idList={id} />
    </div>
  );
}

List.propTypes = {
  list: PropTypes.object.isRequired,
};

export default memo(List);
