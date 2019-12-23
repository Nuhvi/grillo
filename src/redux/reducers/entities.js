import { entities } from '../actions/types';
import { entities as initialState } from '../store/initial-states';

export default (state = initialState, action) => {
  switch (action.type) {
    case entities.DO_SOMETHING:
      return { ...state };
    default:
      return state;
  }
};
