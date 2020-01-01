/**
 *
 * Board
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import BoardLists from 'containers/Lists';
import makeSelectBoard from './selectors';
import reducer from './reducer';
import saga from './saga';
import BoardTitle from './BoardTitle';
import Wrapper from './BoardWrapper';

export function Board({ board }) {
  useInjectReducer({ key: 'allBoards', reducer });
  useInjectSaga({ key: 'allBoards', saga });

  const { title, id } = board;

  return (
    <Wrapper>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="Description of Board" />
      </Helmet>
      <BoardTitle>{title}</BoardTitle>
      <BoardLists idBoard={id} />
    </Wrapper>
  );
}

Board.propTypes = {
  board: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) =>
  createStructuredSelector({
    board: makeSelectBoard(props.match.params.idBoard),
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

export default compose(
  withConnect,
  memo,
)(Board);
