export function fetching(key) {
  return { type: 'FETCHING_JOB', key };
}

export function fetched(key, result) {
  return { type: 'FETCHED_JOB', key, result };
}

export function updateJob(key, work) {
  return dispatch => {
    dispatch(fetching(key));

    // return the promise so react-jobs can resolve
    return work()
      .then(result => dispatch(fetched(key, result)))
      // set it to true as data will be hydrated via redux store
      .then(() => true);
  };
}
