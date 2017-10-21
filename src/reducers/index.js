import { combineReducers } from 'redux';

function jobReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_JOBS':
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  jobs: jobReducer,
});
