export const entities = {
  pending: false,
  error: null,
  data: {
    allProjects: {
      byId: {
        '1': {
          title: 'first_project',
          projectLists: ['1', '2'],
        },
      },
    },
    allLists: {
      byId: {
        '1': {
          title: 'first_list',
          ListCards: ['1'],
        },
        '2': {
          title: 'second_list',
          ListCards: ['2'],
        },
      },
    },
    allCards: {
      byId: {
        '1': {
          title: 'first_card',
        },
        '2': {
          title: 'second_card',
        },
      },
    },
  },
};

export default {
  entities,
};
