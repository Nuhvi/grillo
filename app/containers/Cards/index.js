/**
 *
 * Cards
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
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

export const Cards = ({ idList }) => {
  useInjectReducer({ key: 'allCards', reducer });
  useInjectSaga({ key: 'allCards', saga });

  const cards = useSelector(makeSelectCards(idList));
  const dispatch = useDispatch();

  const onAddCard = title => dispatch(addCard(title, idList));

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
};

export default memo(Cards);
