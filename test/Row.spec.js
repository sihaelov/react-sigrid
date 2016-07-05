import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Row from '../src/Row';


describe("<Row/>", function() {
    it('Uses "div" by default', function() {
        expect(shallow(<Row />).name()).to.equal('div');
    });

    it('Has "row" class', function() {
        expect(shallow(<Row />).hasClass('row')).to.equal(true);
    });

    it('Should merge additional classes passed in', function() {
        const wrapper = shallow(<Row className="bob"/>);

        expect(wrapper.hasClass('bob')).to.equal(true);
        expect(wrapper.hasClass('row')).to.equal(true);
    });
});
