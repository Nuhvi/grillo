/**
 *
 * CardItem
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

function CardItem({ card }) {
  const { title } = card;

  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
}

CardItem.propTypes = {
  card: PropTypes.object.isRequired,
};

export default memo(CardItem);
