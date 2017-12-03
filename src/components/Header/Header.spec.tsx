// tslint:disable no-implicit-dependencies
import * as React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('Header spec', () => {
  it('should render', () => {
    expect(shallow(<Header />).isEmptyRender()).toBeFalsy();
  });
});
