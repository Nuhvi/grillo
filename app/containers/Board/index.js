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
import makeSelectBoard from './selectors';
import reducer from './reducer';
import saga from './saga';

import BoardLists from '../Lists';

export function Board({ board }) {
  useInjectReducer({ key: 'allBoards', reducer });
  useInjectSaga({ key: 'allBoards', saga });

  const { title, id } = board;

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="Description of Board" />
      </Helmet>
      <h1>{title}</h1>
      <BoardLists idBoard={id} />
    </div>
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
