import { addList } from '../actions';
import { ADD_LIST } from '../constants';

describe('Lists actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: ADD_LIST,
      };
      expect(addList()).toEqual(expected);
    });
  });
});
