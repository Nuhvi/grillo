import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addList } from '../../redux/actions/entities';
import ListItem from '../List';

const Board = ({ allBoards, boardId, addList }) => {
  const board = allBoards[boardId];
  const listsIds = board.boardLists;

  const doSomething = e => {
    e.preventDefault();
    const title = e.target.children.title.value;
    addList(title, boardId);
  };

  return (
    <>
      <h2>{board.title}</h2>
      <div style={{ display: 'flex' }}>
        {listsIds.map(listId => {
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
  allBoards: PropTypes.shape({
    board: PropTypes.shape({
      title: 'first_board',
      boardLists: ['1'],
    }),
  }).isRequired,
  addList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  allBoards: state.entities.allBoards.byId,
});

export default connect(mapStateToProps, { addList })(Board);
