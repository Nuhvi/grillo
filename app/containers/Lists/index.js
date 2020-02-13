/**
 *
 * Lists
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Form from 'components/FormAddList';
import _ from 'lodash';
import selectBoardListsOrderedByPos from './selectors';
import reducer from './reducer';
import { addList } from './actions';
import saga from './saga';

import ListsCanvas from './ListsCanvas';

import DraggableLists from './DraggableLists';

export const Lists = ({ idBoard }) => {
  useInjectReducer({ key: 'allLists', reducer });
  useInjectSaga({ key: 'allLists', saga });

  const lists = useSelector(selectBoardListsOrderedByPos(idBoard));
  const dispatch = useDispatch();

  const onAddList = title =>
    dispatch(addList(title, idBoard, _.last(lists).pos + 100));

  return (
    <ListsCanvas>
      <DraggableLists lists={lists} />
      <Form idBoard={idBoard} submitHandler={onAddList} />
    </ListsCanvas>
  );
};

Lists.propTypes = {
  idBoard: PropTypes.string.isRequired,
};

export default memo(Lists);
