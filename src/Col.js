import React from 'react';
import classNames from 'classnames';


const sizes = [
    'large',
    'medium',
    'small'
];

const Col = React.createClass({
    propTypes: {
        small: React.PropTypes.number,
        medium: React.PropTypes.number,
        large: React.PropTypes.number,

        smallOffset: React.PropTypes.number,
        mediumOffset: React.PropTypes.number,
        largeOffset: React.PropTypes.number,

        className: React.PropTypes.string,
        children: React.PropTypes.node
    },

    render() {
        let classes = {'col': true};

        const { small, medium, large, smallOffset, mediumOffset, largeOffset, className, children, ...props } = this.props;
        const cols = {small, medium, large, smallOffset, mediumOffset, largeOffset};

        sizes.forEach( (size) => {
            
            let prop = size;
            let classPart = size + '-';

            if (cols[prop] > 0) {
                classes[classPart + cols[prop]] = true;
            }

            prop = size + 'Offset';
            classPart = size + '-offset-';
            if (cols[prop] > 0) {
                classes[classPart + cols[prop]] = true;
            }

        });

        return (
            <div {...props} className={classNames(className, classes)}>
                {children}
            </div>
        );
    }
});

export default Col;
