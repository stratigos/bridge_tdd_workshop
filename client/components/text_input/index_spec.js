import React from 'react';
import { shallow } from 'enzyme';
import { Simulate } from 'enzyme';

import TextInput from './index';

describe('<TextInput />', () => {
  it('produces a div container with a single input', () => {
    const wrapper = shallow(<TextInput />);

    expect(wrapper.find('div').length).toEqual(1);
  });

  it('produces an input of type text', () => {
    const wrapper = shallow(<TextInput />);

    expect(wrapper.find('input[type="text"]').length).toEqual(1);
  });

  it('has placeholder text prop', () => {
    const wrapper = shallow(<TextInput />);

    expect(wrapper.find('input[placeholder="type stuff here!"]')).not.toBeUndefined();
  });


  describe('when input value is long', () => {
    it('adds CSS class for red text when value is greater than 10 characters', () => {
      const wrapper = shallow(<TextInput />);
      wrapper.find('input[type="text"]').first().simulate('change', { target: { value: 'onetwothreeve' } });

      expect(wrapper.find('input[type="text"]').first().props().className).toMatch(/ red/);
    });

    it('does not add CSS for red class if value is less than 10 characters', () => {
      const wrapper = shallow(<TextInput />);
      wrapper.find('input[type="text"]').first().simulate('change', { target: { value: 'not ten' } });

      expect(wrapper.find('input[type="text"]').first().props().className).not.toMatch(/ red/);
    });

    it('does not add CSS for red class if value is equal to 10 characters', () => {
      const wrapper = shallow(<TextInput />);
      wrapper.find('input[type="text"]').first().simulate('change', { target: { value: 'tenchars!!' } });

      expect(wrapper.find('input[type="text"]').first().props().className).not.toMatch(/ red/);
    });
  });
});
