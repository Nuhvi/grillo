import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCard } from './selectors';
import CardItem from './CardItem';

const Card = ({ card }) => {
  const { title } = card;

  return <CardItem title={title} />;
};

Card.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state, props) => ({
  card: getCard(state, props),
});

export default connect(mapStateToProps)(Card);
