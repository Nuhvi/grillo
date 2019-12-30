import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addList } from '../../redux/actions/entities';
import ListItem from '../List';
import { getBoardWithLists } from './selectors';

const Board = ({ boardId, boardWithLists, addList }) => {
  const { title, listIds } = boardWithLists;

  const doSomething = e => {
    e.preventDefault();
    const title = e.target.children.title.value;
    addList(title, boardId);
  };

  return (
    <>
      <h2>{title}</h2>
      <div style={{ display: 'flex' }}>
        {listIds.map(listId => {
          return <ListItem key={listId} listId={listId} />;
        })}
        <form onSubmit={e => doSomething(e)}>
          <input placeholder="Title" name="title" />
          <button type="submit">Add list</button>
        </form>
      </div>
    </>
  );
};

Board.propTypes = {
  boardId: PropTypes.string.isRequired,
  boardWithLists: PropTypes.shape({
    title: 'first_board',
    listIds: PropTypes.shape([]),
  }).isRequired,

  addList: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  boardWithLists: getBoardWithLists(state, props),
});

export default connect(mapStateToProps, { addList })(Board);
