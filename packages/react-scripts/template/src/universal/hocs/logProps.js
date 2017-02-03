import mapProps from 'recompose/mapProps';

export default (a, b) => {
  var label, logger;

  if (typeof a === 'string') {
    label = a;
  }
  if (typeof b === 'string') {
    label = b;
  }
  if (typeof a === 'function') {
    logger = a;
  }
  if (typeof b === 'function') {
    logger = b;
  }

  // log()
  if (!label && !logger) {
    return mapProps(props => {
      console.log(props);
      return props;
    });
  }

  // log('label')
  if (label && !logger) {
    return mapProps(props => {
      console.log(label, props);
      return props;
    });
  }

  // log(props => ({ ...props }))
  if (!label && logger) {
    return mapProps(props => {
      console.log(logger(props));
      return props;
    });
  }

  // log('label', props => ({ ...props }))
  return mapProps(props => {
    console.log(label, logger(props));
    return props;
  });
};
