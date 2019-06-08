import React, { Component } from 'react';
import connect from '../utils/connect';

class Table extends Component {
    render() {
        let {
            num
        } = this.props.tableReducer;
        return (
            <div>
                <h3>Table</h3>
                <div>
                    <button onClick={this.addNum}> + </button>
                    <b> {num} </b>
                    <button onClick={this.reduceNum}> - </button>
                </div>
            </div>
        )
    }
    addNum = () => {
        this.props.addNum()
    }
    reduceNum = () => {
        this.props.reduceNum()
    }
}

export default connect(
    state => state,
    dispatch => {
        return {
            addNum() {
                dispatch({
                    type: 'TABLE_ADD'
                })
            },
            reduceNum() {
                dispatch({
                    type: 'TABLE_REDUCE'
                })
            }
        }
    }
)(Table);
