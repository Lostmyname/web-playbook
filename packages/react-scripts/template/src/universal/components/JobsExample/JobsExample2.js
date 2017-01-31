import React, { PropTypes } from 'react';
import { withPosts } from '../../models/posts';

var JobsTest = ({ job }) => (
  <div>
    <p>Example 2 (fetching same data)</p>
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

export default withPosts(JobsTest);
