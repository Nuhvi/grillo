/**
 *
 * Board
 *
 */

import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import BoardLists from 'containers/Lists';
import propTypes from 'prop-types';
import makeSelectBoard from './selectors';
import reducer from './reducer';
import saga from './saga';
import BoardTitle from './BoardTitle';
import Wrapper from './BoardWrapper';

const Board = props => {
  useInjectReducer({ key: 'allBoards', reducer });
  useInjectSaga({ key: 'allBoards', saga });

  const { idBoard } = props.match.params;
  const board = useSelector(makeSelectBoard(idBoard));

  const { title } = board;

  return (
    <Wrapper>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="Description of Board" />
      </Helmet>
      <BoardTitle>{title}</BoardTitle>
      <BoardLists idBoard={idBoard} />
    </Wrapper>
  );
};

Board.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({}),
  }),
};

export default memo(Board);
