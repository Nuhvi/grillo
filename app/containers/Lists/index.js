/**
 *
 * Lists
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLists from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import List from './List';

export function Lists({ lists }) {
  useInjectReducer({ key: 'allLists', reducer });
  useInjectSaga({ key: 'allLists', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
      {lists.map(list => (
        <List key={list.id} list={list} />
      ))}
    </div>
  );
}

Lists.propTypes = {
  dispatch: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired,
};

const mapStateToProps = (state, props) =>
  createStructuredSelector({
    lists: makeSelectLists(props.idBoard),
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
)(Lists);
