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
import makeSelectListCardsOrderedByPos from './selectors';
import reducer from './reducer';
import saga from './saga';
import DraggableCards from './DraggableCards';
import FormWrapper from './FormWrapper';
import { addCard } from './actions';

export const Cards = ({ idList }) => {
  useInjectReducer({ key: 'allCards', reducer });
  useInjectSaga({ key: 'allCards', saga });

  const listCards = useSelector(makeSelectListCardsOrderedByPos(idList));

  const dispatch = useDispatch();

  const onAddCard = title =>
    dispatch(addCard({ title, idList, lastCard: _.last(listCards) }));

  return (
    <div style={{ height: '100%' }}>
      <FormWrapper>
        <FormAddCard submitHandler={onAddCard} />
      </FormWrapper>
      <DraggableCards cards={listCards} idList={idList} />
    </div>
  );
};

Cards.propTypes = {
  idList: PropTypes.string.isRequired,
};

export default memo(Cards);
