import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Card = ({ id, allCards }) => {
  const { title } = allCards[id];

  return <p>{title}</p>;
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  allCards: PropTypes.shape({
    list: PropTypes.shape({
      title: 'first_board',
    }),
  }).isRequired,
};

const mapStateToProps = state => ({
  allCards: state.entities.allCards.byId,
});

export default connect(mapStateToProps)(Card);
