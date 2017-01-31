import { compose } from 'redux';
import { connect } from 'react-redux';
import { withJob } from 'react-jobs/ssr';
import { updateJob } from '../store/ducks/_jobs_/actions';

var enhanced = (key, work) => compose(
  connect(
    state => ({
      jobState: {
        data: state._jobs_[key]
      }
    }),
    dispatch => ({
      updateJob: () => dispatch(updateJob(key, work))
    })
  ),
  withJob(props => {
    if (props.jobState) {
      return true;
    }
    return props.updateJob();
  })
);

export default enhanced;
