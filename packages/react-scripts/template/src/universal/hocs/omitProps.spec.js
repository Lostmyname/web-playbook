import React from 'react';
import { shallow } from 'enzyme';
import omitProps from './omitProps';

describe('HOC: omitProps', function () {
  it('should omit props specified', function () {
    var testProps = {
      a: 1,
      b: () => 2,
      c: '3'
    };

    var enhance = omitProps(['a', 'b']);

    var Component = props => <div {...props} />;
    var Enhanced = enhance(Component);

    shallow(<Enhanced {...testProps} />)
      .props()
      .should.eql({
        c: '3'
      });
  });
});
