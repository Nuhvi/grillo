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
import CardItem from 'components/Card';
import Form from 'components/FormAddCard';
import makeSelectCards from './selectors';
import reducer from './reducer';
import saga from './saga';

import CardsListWrapper from './CardsListWrapper';
import CardWrapper from './CardWrapper';
import FormWrapper from './FormWrapper';
import { addCard } from './actions';

export const Cards = ({ idList, cards, onAddCard }) => {
  useInjectReducer({ key: 'allCards', reducer });
  useInjectSaga({ key: 'allCards', saga });

  return (
    <CardsListWrapper>
      {cards.map(card => (
        <CardWrapper key={card.id}>
          <CardItem card={card} />
        </CardWrapper>
      ))}
      <FormWrapper>
        <Form idList={idList} submitHandler={onAddCard} />
      </FormWrapper>
    </CardsListWrapper>
  );
};

Cards.propTypes = {
  idList: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  onAddCard: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) =>
  createStructuredSelector({
    cards: makeSelectCards(props.idList),
  });

function mapDispatchToProps(dispatch) {
  return {
    onAddCard: (title, idList) => dispatch(addCard(title, idList)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Cards);
