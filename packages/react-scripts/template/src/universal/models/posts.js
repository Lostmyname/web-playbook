import { withJob } from 'react-jobs/ssr';

var basicCache = null;

export var withPosts = withJob(
  () => {
    if (basicCache) {
      return basicCache;
    }
    return fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(res => {
        var basicCache = res.json();
        return basicCache;
      });
  }
);
