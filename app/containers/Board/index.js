/**
 *
 * Board
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectBoard from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Board({ board }) {
  useInjectReducer({ key: 'allBoards', reducer });
  useInjectSaga({ key: 'allBoards', saga });

  return (
    <div>
      <Helmet>
        <title>{board.title}</title>
        <meta name="description" content="Description of Board" />
      </Helmet>
      <h1>{board.title}</h1>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Board.propTypes = {
  dispatch: PropTypes.func.isRequired,
  board: PropTypes.shape({}).isRequired,
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
