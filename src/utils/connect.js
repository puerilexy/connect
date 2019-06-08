import React, { Component } from 'react';
import context from './context';

const connect = (mapStateToProps, mapDispatchToProps) => {
    return (ComponentWrap) => {
        return class extends Component {
            constructor (props) {
                super(props);
                this.state = {
                    stateStore: null
                }
            }
            componentDidMount () {
                // 改变Component的state
                this.store.subscribe(() => {
                    this.setState({
                        stateStore: this.store.getState()
                    })
                })
            }
            componentWillUpdate () {
                return true;
            }
            render() {
                return <context.Consumer>
                    {
                        (value) => {
                            this.store = value;
                            let dispatch = mapDispatchToProps(this.store.dispatch);
                            let storeState = mapStateToProps(this.store.getState());
                            return (
                                <ComponentWrap {...this.props} {...dispatch} {...storeState} />
                            )
                        }
                    }
                </context.Consumer>
            }
            componentWillUnmount = () => {
                // 解决组件卸载后调用setState的问题 
                this.setState = (state,callback)=>{
                  return;
                };
            }
        }
    }
}

export default connect;
