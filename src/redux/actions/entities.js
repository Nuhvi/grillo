import { entities } from './types';

export const addList = (title, projectId) => ({
  type: entities.ADD_LIST,
  title,
  projectId,
});

export default { addList };
