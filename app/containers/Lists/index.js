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
import Form from 'components/FormAddList';
import List from 'components/List';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import makeSelectLists from './selectors';
import reducer from './reducer';
import saga from './saga';
import ListsCanvas from './ListsCanvas';
import { addList } from './actions';
export function Lists({ idBoard, lists, onAddList }) {
  useInjectReducer({ key: 'allLists', reducer });
  useInjectSaga({ key: 'allLists', saga });

  return (
    <ListsCanvas>
      <DragDropContext onDragEnd={() => {}}>
        <Droppable
          droppableId="all-droppables"
          direction="horizontal"
          type="list"
        >
          {provided => (
            <div
              style={{ display: 'flex' }}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {lists.map((list, index) => (
                <div key={list.id}>
                  <List list={list} draggableIndex={index} />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <Form idBoard={idBoard} submitHandler={onAddList} />
    </ListsCanvas>
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
