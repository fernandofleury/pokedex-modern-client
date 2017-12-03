// tslint:disable no-implicit-dependencies
import * as React from 'react';
import { shallow } from 'enzyme';
import Loader from './index';

describe('Loader spec', () => {
  it('should render', () => {
    expect(shallow(<Loader />).isEmptyRender()).toBeFalsy();
  });
});
