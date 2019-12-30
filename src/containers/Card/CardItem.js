import React from 'react';
import PropTypes from 'prop-types';

const CardComponent = ({ title }) => {
  return <div>{title}</div>;
};

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CardComponent;
