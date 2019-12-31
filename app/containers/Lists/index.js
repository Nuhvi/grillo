/**
 *
 * Lists
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLists from './selectors';
import reducer from './reducer';
import saga from './saga';
import List from './components/List';
import ListsCanvas from './ListsCanvas';
import { addList } from './actions';
import Form from './components/FormAddList';

export function Lists({ idBoard, lists, onAddList }) {
  useInjectReducer({ key: 'allLists', reducer });
  useInjectSaga({ key: 'allLists', saga });

  return (
    <div>
      <ListsCanvas>
        {lists.map(list => (
          <List key={list.id} list={list} />
        ))}
        <Form idBoard={idBoard} submitHandler={onAddList} />
      </ListsCanvas>
    </div>
  );
}

Lists.propTypes = {
  idBoard: PropTypes.string.isRequired,
  lists: PropTypes.array.isRequired,
  onAddList: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) =>
  createStructuredSelector({
    lists: makeSelectLists(props.idBoard),
  });

function mapDispatchToProps(dispatch) {
  return {
    onAddList: (title, idBoard) => dispatch(addList(title, idBoard)),
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
