export const entities = {
  pending: false,
  error: null,
  data: {
    projects: {
      byId: {
        '1': {
          title: 'first_project',
          lists: ['1', '2'],
        },
      },
      allIds: [],
    },
    lists: {
      byId: {
        '1': {
          title: 'first_list',
          cards: ['1'],
        },
        '2': {
          title: 'second_list',
          cards: ['2'],
        },
      },
      allIds: [],
    },
    cards: {
      byId: {
        '1': {
          title: 'first_card',
        },
        '2': {
          title: 'second_card',
        },
      },
      allIds: [],
    },
  },
};

export default {
  entities,
};
