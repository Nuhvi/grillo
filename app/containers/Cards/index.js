/**
 *
 * Cards
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import CardItem from 'components/CardItem';
import makeSelectCards from './selectors';
import reducer from './reducer';
import saga from './saga';

import CardsListWrapper from './CardsListWrapper';

export function Cards({ cards }) {
  useInjectReducer({ key: 'allCards', reducer });
  useInjectSaga({ key: 'allCards', saga });

  return (
    <CardsListWrapper>
      {cards.map(card => (
        <CardItem key={card.id} card={card} />
      ))}
    </CardsListWrapper>
  );
}

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
};

const mapStateToProps = (state, props) =>
  createStructuredSelector({
    cards: makeSelectCards(props.idList),
  });

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Cards);
