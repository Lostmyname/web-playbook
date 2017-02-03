/* eslint-disable no-debugger */
import mapProps from 'recompose/mapProps';

var debugWithProps = () => mapProps(props => { // eslint-disable-line no-unused-vars
  debugger;
  return props => props;
});

export default debugWithProps;
