import React, { PropTypes } from 'react';
import withData from '../../hocs/withData';
import * as posts from '../../models/posts';

var enhance = withData('posts',
  () => posts.get(),
  posts => posts.filter(p => p.id === 1)
);

var DataExample = ({ posts }) => (
  <div>
    {posts.result
      ? JSON.stringify(posts.result)
      : 'Job not yet resolved'
    }
  </div>
);

DataExample.propTypes = {
  posts: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    inProgress: PropTypes.bool.isRequired,
    result: PropTypes.any,
    error: PropTypes.any
  })
};

export default enhance(DataExample);
