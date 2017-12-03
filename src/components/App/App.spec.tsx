// tslint:disable no-implicit-dependencies
import * as React from 'react';
import { shallow } from 'enzyme';
import App from './index';

describe('App spec', () => {
  it('should render', () => {
    expect(shallow(<App />).isEmptyRender()).toBeFalsy();
  });
});
