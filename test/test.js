import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Star from '../src/Star';

configure({ adapter: new Adapter() });

describe('Star item', () => {
    const wrapper = shallow(<Star />);
    it('should be a div item', () => {
      expect(wrapper.type()).to.eql('div');
    });
});