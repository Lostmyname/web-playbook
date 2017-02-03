import compose from 'recompose/compose';
import mapProps from 'recompose/mapProps';
import omit from 'lodash/fp/omit';

var omitProps = compose(mapProps, omit);

export default omitProps;
