import React from 'react';
import { shallow} from 'enzyme';

import Card from './Card';

// shallow means only take a look at components top level, i.e if component has children, the test
// wont look at the children
it('should expect to render Card component', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
