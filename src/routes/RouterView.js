import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

class RouterView extends Component {
    render() {
        let {
            routes, children
        } = this.props;
        return (
            <Switch>
                {
                    routes.map((item, index) => {
                        return <Route key={index}
                            path={item.path}
                            render={() => {
                                return <item.component />
                            }}
                        >
                        </Route>
                    })
                }
                {
                    children
                }
            </Switch>
        )
    }
}

export default RouterView;
