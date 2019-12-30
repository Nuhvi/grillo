import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListComponent from './ListComponent';
import { getListWithCards } from './selectors';

const List = ({ listWithCards }) => {
  const { title, cardIds } = listWithCards;
  return <ListComponent title={title} cardIds={cardIds} />;
};

List.propTypes = {
  listWithCards: PropTypes.shape({
    title: 'first_board',
    cardIds: PropTypes.shape([]),
  }).isRequired,
};

const mapStateToProps = (state, props) => ({
  listWithCards: getListWithCards(state, props),
});

export default connect(mapStateToProps)(List);
