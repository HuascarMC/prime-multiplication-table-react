import React from 'react';
import InputContainer from './InputContainer'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
 shallow(<InputContainer />);
})

it('should render render one form', () => {
 const wrapper = shallow(<InputContainer />);
 expect(wrapper.find('.get-number-form').exists()).toEqual(true);
})

it('should render input box', () => {
 const wrapper = shallow(<InputContainer />);
 expect(wrapper.find('.get-number-input').exists()).toEqual(true);
})

it('should render text displaying input', () => {
 const wrapper = shallow(<InputContainer />);
 expect(wrapper.find('.display-input-text').exists()).toEqual(true);
})

xit('should have a state', () => {
 const wrapper = shallow(<InputContainer />);
 expect(wrapper.state().exists()).toEqual(true);
})

xit('it should update state number', () => {
 const wrapper = shallow(<InputContainer />);
 wrapper.find('.get-number-input').simulate('click').simulateKeyPresses(9);
 expect(wrapper.state().number).to.equal(9);
})
