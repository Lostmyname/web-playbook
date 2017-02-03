export function updateData(key, work) {
  return dispatch => {
    dispatch({ type: 'FETCHING_DATA', key });

    return work()
      .then(result => {
        dispatch({ type: 'FETCHED_DATA', key, result });
      })
      .catch(error => {
        dispatch({ type: 'FETCHED_DATA', key, error });
      });
  };
}
