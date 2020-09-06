import React, { Component } from 'react';

class Counter extends Component {
    render() {
        let {value} = this.props.counter; 
        let classes = "badge m-1 badge-";
        classes+= (value === 0) ? "warning":"primary";
        value = (value === 0) ? "Zero": value;

        return ( 
        <div className="p-1">
            <span className={classes} >{value}</span>
            <button className="btn btn-secondary" onClick={() =>this.props.onIncerement(this.props.counter)} >Increament</button>
            <button className="btn btn-danger ml-2" onClick={() => this.props.onDelete(this.props.counter.id)} >Delete</button>
        </div> );
    }
}
 
export default Counter;