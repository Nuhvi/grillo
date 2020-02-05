import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import List from 'components/List';
import { useSelector, useDispatch } from 'react-redux';
import { changePosCard } from 'containers/Cards/actions';
import { selectCardsDomain } from 'containers/Cards/selectors';
import _ from 'lodash';
import getNewPos from 'utils/lib/getNewPos';
import { changePosList } from './actions';

const ListWrapper = styled.div`
  display: flex;
`;

const DraggableLists = ({ lists }) => {
  const dispatch = useDispatch();
  const allCards = useSelector(selectCardsDomain);

  const onDragEnd = result => {
    let { source, destination } = result;
    if (
      destination === null ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    )
      return;

    source = source.index;
    destination = destination.index;

    if (result.type === 'list') {
      dispatch(
        changePosList({
          idList: lists[source].id,
          newPos: getNewPos(lists, source, destination),
        }),
      );
    } else {
      const idList = destination.droppableId;
      const cards = _.filter(allCards, card => card.idList === idList);

      dispatch(
        changePosCard({
          cards,
          idList,
          source,
          destination,
        }),
      );
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId="all-droppables"
        direction="horizontal"
        type="list"
      >
        {provided => (
          <ListWrapper {...provided.droppableProps} ref={provided.innerRef}>
            {lists.map((list, index) => (
              <div key={list.id}>
                <List list={list} draggableIndex={index} />
              </div>
            ))}
            {provided.placeholder}
          </ListWrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
};

DraggableLists.propTypes = {
  lists: PropTypes.array.isRequired,
};

export default DraggableLists;
