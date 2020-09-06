import React, { Component } from 'react';

class Counter extends Component {
    render() {
        let {value} = this.props.counter; 
        let classes = "badge m-1 badge-";
        classes+= (value === 0) ? "warning":"primary";
        value = (value === 0) ? "Zero": value;

        return ( 
        <div className="p-1 row mx-0">
            <div className="col-1">
                <span className={classes} >{value}</span>
            </div>
            <div className="col-1">
                <button className="btn btn-secondary" onClick={() =>this.props.onIncerement(this.props.counter)} >+</button>
            </div>
            <div className="col-1">
                <button className="btn btn-secondary" onClick={() =>this.props.onDecerement(this.props.counter)} disabled={!this.props.counter.value} >-</button>
            </div>
            <div className="col-1">
                <button className="btn btn-danger ml-2" onClick={() => this.props.onDelete(this.props.counter.id)} >x</button>
            </div>
        </div> );
    }
}
 
export default Counter;