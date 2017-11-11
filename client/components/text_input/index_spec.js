import React from 'react';
import { shallow } from 'enzyme';

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
});
