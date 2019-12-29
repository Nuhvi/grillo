import { entities } from './types';

export const addList = (title, boardId) => ({
  type: entities.ADD_LIST,
  title,
  boardId,
});

export default { addList };
