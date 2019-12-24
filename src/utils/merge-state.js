/* eslint-disable consistent-return */
import _ from 'lodash';

const customizer = (objValue, srcValue) => {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
};

export default (state, newState) => {
  return _.mergeWith({}, state, newState, customizer);
};
