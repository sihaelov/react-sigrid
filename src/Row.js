import React from 'react';
import classNames from 'classnames';


const Row = React.createClass({

    propTypes: {
        className: React.PropTypes.string,
        children: React.PropTypes.node
    },

    render() {

        return (
            <div {...this.props} className={classNames(this.props.className, 'row')}>
                {this.props.children}
            </div>
        );
    }
});

export default Row;
