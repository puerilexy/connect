import React, { Component } from 'react';
import connect from '../utils/connect';

class List extends Component {
    render () {
        let {
            listReducer
        } = this.props;
        return (
            <div>
                <h3>List</h3>
                <button onClick={this.add}>添加</button>
                <ul>
                    {
                        listReducer && listReducer.map((item, index) => {
                            return <li key={index}>name: {item.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
    add = () => {
        this.props.addList({name: 'puerile'})
    }
}

export default connect(
    (state) => {
        return state;
    },
    (dispatch) => {
        return {
            addList(list){
                dispatch({
                    type: 'LIST_ADD',
                    list: list
                })
            }
        }
    }
)(List);
