import { get } from 'axios';

export function noop() { console.log('nothin'); }

function fetchJobs(data) {
  // console.log('data:', data);
  return {
    type: 'FETCH_JOBS',
    payload: data,
  };
}

export function requestJobs(query = '-') {
  return (dispatch) => {
    get(`https://remoteok.io/remote${query}jobs.json`)
      .then((res) => {
        dispatch(fetchJobs(res.data));
      })
      .catch(error => console.error('error fetching jobs': error));
  };
}
