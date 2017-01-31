import React, { PropTypes } from 'react';
import withJob from '../../hocs/withJobs';
import * as posts from '../../models/posts';

var enhance = withJob('posts', () => posts.get());

var JobsTest = ({ jobState }) => (
  <div>
    {jobState.data
      ? JSON.stringify(jobState.data)
      : 'Job not yet resolved'
    }
  </div>
);

JobsTest.propTypes = {
  jobState: PropTypes.shape({
    // completed: PropTypes.bool.isRequired,
    // inProgress: PropTypes.bool.isRequired,
    // result: PropTypes.any,
    // error: PropTypes.any
    data: PropTypes.any
  })
};

export default enhance(JobsTest);
