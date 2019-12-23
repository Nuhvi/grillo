import { entities } from './types';

export const doSomething = () => ({
  type: entities.DO_SOMETHING,
});

export default { doSomething };
