/**
 *
 * List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

function List({ list }) {
  const { title } = list;

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

List.propTypes = {
  list: PropTypes.shape({}).isRequired,
};

export default List;
