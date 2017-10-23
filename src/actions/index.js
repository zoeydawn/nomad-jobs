import { get } from 'axios';

function fetchJobs(data) {
  return {
    type: 'FETCH_JOBS',
    payload: data,
  };
}

function toggleLoad(data) {
  return {
    type: 'TOGGLE_LOADING',
    payload: data,
  };
}

export function requestJobs(query) {
  const searchQuery = query ? `-${query.replace(' ', '-')}-` : '-';
  return (dispatch) => {
    get(`https://remoteok.io/remote${searchQuery}jobs.json`)
      .then((res) => {
        dispatch(fetchJobs({ jobs: res.data, query }));
      })
      .catch(error => console.error('error fetching jobs': error));
  };
}

export function toggleLoading(bool) {
  return (dispatch) => {
    dispatch(toggleLoad(bool));
  };
}
