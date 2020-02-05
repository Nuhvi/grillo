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
import FormAddCard from 'components/FormAddCard';
import _ from 'lodash';
import makeSelectListCardsOrderedByPos, {
  makeSelectBoardCards,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import DraggableCards from './DraggableCards';
import CardsListWrapper from './CardsListWrapper';
import FormWrapper from './FormWrapper';
import { addCard } from './actions';

export const Cards = ({ idList, idBoard }) => {
  useInjectReducer({ key: 'allCards', reducer });
  useInjectSaga({ key: 'allCards', saga });

  const listCards = useSelector(makeSelectListCardsOrderedByPos(idList));

  const boardCards = useSelector(makeSelectBoardCards(idBoard));

  const dispatch = useDispatch();
  const onAddCard = title =>
    dispatch(addCard(title, idList, _.last(boardCards).pos + 100000));

  return (
    <CardsListWrapper>
      <DraggableCards cards={listCards} idList={idList} />
      <FormWrapper>
        <FormAddCard idList={idList} submitHandler={onAddCard} />
      </FormWrapper>
    </CardsListWrapper>
  );
};

Cards.propTypes = {
  idList: PropTypes.string.isRequired,
  idBoard: PropTypes.string.isRequired,
};

export default memo(Cards);
