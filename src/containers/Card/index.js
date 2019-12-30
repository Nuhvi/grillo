import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCard } from './selectors';

const Card = ({ card }) => {
  const { title } = card;

  return <p>{title}</p>;
};

Card.propTypes = {
  card: PropTypes.shape({
    title: 'first_board',
  }).isRequired,
};

const mapStateToProps = (state, props) => ({
  card: getCard(state, props),
});

export default connect(mapStateToProps)(Card);
