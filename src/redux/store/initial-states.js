export const entities = {
  pending: false,
  error: null,
  allBoards: {
    byId: {
      '1': {
        title: 'first_board',
        boardLists: ['1', '2'],
      },
    },
  },
  allLists: {
    byId: {
      '1': {
        title: 'first_list',
        boardId: '1',
      },
      '2': {
        title: 'second_list',
        boardId: '1',
      },
    },
  },
  allCards: {
    byId: {
      '1': {
        title: 'first_card',
        listId: '1',
      },
      '2': {
        title: 'second_card',
        listId: '2',
      },
    },
  },
};

export default {
  entities,
};
