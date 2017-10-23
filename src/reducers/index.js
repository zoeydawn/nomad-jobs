import { combineReducers } from 'redux';

function searchReducer(state = { jobs: [], query: '' }, action) {
  switch (action.type) {
    case 'FETCH_JOBS':
      return action.payload;
    default:
      return state;
  }
}

function loadingReducer(state = true, action) {
  switch (action.type) {
    case 'TOGGLE_LOADING':
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  searchResults: searchReducer,
  loading: loadingReducer,
});
