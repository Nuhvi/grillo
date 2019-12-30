import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import List from '../List';
import { getBoardWithLists } from './selectors';

const Board = ({ boardWithLists }) => {
  const { title, listIds } = boardWithLists;

  return (
    <>
      <h2>{title}</h2>
      <div style={{ display: 'flex' }}>
        {listIds.map(listId => {
          return <List key={listId} listId={listId} />;
        })}
      </div>
    </>
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
