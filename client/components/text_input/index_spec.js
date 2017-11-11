import React from 'react';
import { shallow } from 'enzyme';

import TextInput from './index';

describe('<TextInput />', () => {
  it('produces a div container for the input', () => {
    const wrapper = shallow(<TextInput />);

    expect(wrapper.find('div.todds-test-input-container').length).toEqual(1);
  });

  it('produces an input of type text', () => {
    const wrapper = shallow(<TextInput />);

    expect(wrapper.find('input[type="text"]').length).toEqual(1);
  });

  it('has placeholder text prop', () => {
    const wrapper = shallow(<TextInput />);

    expect(wrapper.find('input[placeholder="type stuff here!"]')).not.toBeUndefined();
  });

  it('produces a div container for the button', () => {
    const wrapper = shallow(<TextInput />);

    expect(wrapper.find('div.todds-test-btn-container').length).toEqual(1);
  });

  it('produces a button', () => {
    const wrapper = shallow(<TextInput />);

    expect(wrapper.find('button').length).toEqual(1);
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
