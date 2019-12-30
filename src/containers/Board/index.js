import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import List from '../List';
import { ListsWrapper } from './components';
import { getBoardWithLists } from './selectors';

const Board = ({ boardWithLists }) => {
  const { title, listIds } = boardWithLists;

  return (
    <div>
      <h2>{title}</h2>
      <ListsWrapper>
        {listIds.map(listId => {
          return <List key={listId} listId={listId} />;
        })}
      </ListsWrapper>
    </div>
  );
};

Board.propTypes = {
  boardWithLists: PropTypes.shape({
    title: PropTypes.string.isRequired,
    listIds: PropTypes.array.isRequired,
  }).isRequired,
};

const mapStateToProps = (state, props) => ({
  boardWithLists: getBoardWithLists(state, props),
});

export default connect(mapStateToProps)(Board);
