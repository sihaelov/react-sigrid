import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Col from '../src/Col';


describe("<Col />", function() {
    it('Should set Col of one', function() {
        const wrapper = shallow(<Col small={1} medium={1} large={1} />);

        expect(wrapper.hasClass('col')).to.equal(true);
        expect(wrapper.hasClass('small-1')).to.equal(true);
        expect(wrapper.hasClass('medium-1')).to.equal(true);
        expect(wrapper.hasClass('large-1')).to.equal(true);

    });

    it('Should set Offset of one', function() {
        const wrapper = shallow(<Col smallOffset={1} mediumOffset={1} largeOffset={1} />);

        expect(wrapper.hasClass('col')).to.equal(true);
        expect(wrapper.hasClass('small-offset-1')).to.equal(true);
        expect(wrapper.hasClass('medium-offset-1')).to.equal(true);
        expect(wrapper.hasClass('large-offset-1')).to.equal(true);
    });
   
});
