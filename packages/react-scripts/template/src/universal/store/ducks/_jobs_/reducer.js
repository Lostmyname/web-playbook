export default function reducer(state = {}, action) {
  if (action.type === 'FETCHING_JOB') {
    return { ...state,
      [action.key]: {
        status: 'fetching'
      }
    };
  }

  if (action.type === 'FETCHED_JOB') {
    return { ...state ,
      [action.key]: {
        status: 'fetched',
        result: action.result
      }
    };
  }

  return state;
}
