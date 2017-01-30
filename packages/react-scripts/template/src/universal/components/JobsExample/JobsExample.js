import React, { PropTypes } from 'react';
import { withJob } from 'react-jobs/ssr';
import * as posts from '../../models/posts';

var enhance = withJob(
  () => posts.get()
);

var JobsTest = ({ job }) => (
  <div>
    {job.result
      ? JSON.stringify(job.result)
      : 'Job not yet resolved'
    }
  </div>
);

JobsTest.propTypes = {
  job: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    inProgress: PropTypes.bool.isRequired,
    result: PropTypes.any,
    error: PropTypes.any
  })
};

export default enhance(JobsTest);
