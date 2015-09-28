import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  messages: []
}

const actionsMap = {
  [ActionTypes.ACTION]: (state, action) => {
    return state;
  }
}

export default function games(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
};
