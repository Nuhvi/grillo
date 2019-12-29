import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListComponent from '../../components/ListComponent';

const List = ({ id, allLists }) => {
  const { title } = allLists[id];

  return <ListComponent title={title} />;
};

List.propTypes = {
  id: PropTypes.string.isRequired,
  allLists: PropTypes.shape({
    list: PropTypes.shape({
      title: 'first_board',
      boardLists: ['1'],
    }),
  }).isRequired,
};

const mapStateToProps = state => ({
  allLists: state.entities.allLists.byId,
});

export default connect(mapStateToProps)(List);
