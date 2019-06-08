import React, { Component } from 'react';
import context from '../utils/context';

class Provider extends Component {
    render () {
        let {
            store, children
        } = this.props;
        return (
            <context.Provider value={store}>
                {children}
            </context.Provider>
        )
    }
}

export default Provider;
