import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Search from '../components/Search';
import Pokemon from '../components/Pokemon';

configure({ adapter: new Adapter() });
describe('Pokemon search app', () => {
  const props = {};

  describe('<Search />', () => {
    beforeEach(() => {
      props.onChange = jest.fn();
    });

    it('should render input field', () => {
      const wrapper = shallow(<Search {...props} />);
      expect(wrapper.find('input').length).toBe(1);
    });

    describe('rendered input', () => {
      it('should have type as text', () => {
        const wrapper = shallow(<Search {...props} />);
        expect(wrapper.find('input').props().type).toBe('text');
      });

      it('should have a placeholder with word `pokemon` in it', () => {
        const wrapper = shallow(<Search {...props} />);
        expect(wrapper.find('input').props().placeholder).toMatch(/pokemon/);
      });

      it('should have onChange event defined', () => {
        const wrapper = shallow(<Search {...props} />);
        expect(wrapper.find('input').props().onChange).toBeDefined();
      });

      it('should call same onChange function which was passed as props to <Search />', () => {
        const wrapper = shallow(<Search {...props} />);
        expect(wrapper.find('input').props().onChange).toEqual(props.onChange);
      });
    });
  });

  describe('<Pokemon />', () => {
    beforeEach(() => {
      props.pokemon = {
        id: 'aaa',
        name: 'xyz',
      };
    });

    it('should render one `li` element', () => {
      const wrapper = shallow(<Pokemon {...props} />);
      expect(wrapper.find('li').length).toBe(1);
    });

    it('should render one `button` element', () => {
      const wrapper = shallow(<Pokemon {...props} />);
      expect(wrapper.find('button').length).toBe(1);
    });

    describe('rendered `button`', () => {
      it('should have type as button', () => {
        const wrapper = shallow(<Pokemon {...props} />);
        expect(wrapper.find('button').props().type).toBe('button');
      });

      it('should have background image based on id passed as props', () => {
        const wrapper = shallow(<Pokemon {...props} />);
        expect(wrapper.find('button').props().style.backgroundImage).toBe(`url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`})`);
      });
    });

    it('should render one `p` element', () => {
      const wrapper = shallow(<Pokemon {...props} />);
      expect(wrapper.find('p').length).toBe(1);
    });

    describe('rendered `p`', () => {
      it('should have same text which was passed as props', () => {
        const wrapper = shallow(<Pokemon {...props} />);
        expect(wrapper.find('p').text()).toBe(props.pokemon.name);
      });
    });
  });
});
