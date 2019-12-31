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
import ListsCanvas from './ListsCanvas';
import { addList } from './actions';

export function Lists({ lists, onAddList }) {
  useInjectReducer({ key: 'allLists', reducer });
  useInjectSaga({ key: 'allLists', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <ListsCanvas>
        {lists.map(list => (
          <List key={list.id} list={list} />
        ))}
      </ListsCanvas>
      <form
        onSubmit={evt => {
          evt.preventDefault();
          onAddList(evt);
        }}
      >
        <input name="title" placeholder="add list" />
        <button type="submit">Add list</button>
      </form>
    </div>
  );
}

Lists.propTypes = {
  lists: PropTypes.array.isRequired,
  onAddList: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) =>
  createStructuredSelector({
    lists: makeSelectLists(props.idBoard),
  });

function mapDispatchToProps(dispatch) {
  return {
    onAddList: evt => dispatch(addList(evt.target.children.title.value.trim())),
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
