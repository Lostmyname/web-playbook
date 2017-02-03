import { compose } from 'redux';
import { connect } from 'react-redux';
import when from 'recompose/branch';
import mapProps from 'recompose/mapProps';
import lifecycle from 'recompose/lifecycle';
import omitProps from './omitProps';
import { updateData } from '../store/ducks/_data_/actions';
import { initialState } from '../store/ducks/_data_/reducer';

var withData = (key, work, transform) => compose(
  // map data already in store to a data prop
  connect(state => ({
    [key]: state._data_[key] || initialState
  })),
  lifecycle({
    componentWillMount() {
      // if the data isn't already being fetched into the store add it
      if (!this.props[key].completed && !this.props[key].inProgress) {
        this.props.dispatch(updateData(key, work));
      }
    },
    componentDidMount() {
      // if the data failed on the server, try again on client
      if (this.props[key].error) {
        this.props.dispatch(updateData(key, work));
      }
    }
  }),
  // if a transform function was provided and the data is resolved transform the result
  when(props => transform && props[key].result,
    mapProps(props => ({
      ...props,
      [key]: {
        ...props[key],
        result: transform(props[key].result)
      }
    }))
  ),
  omitProps(['dispatch'])
);

export default withData;
