import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 6},
            {id: 2, value: 7},
            {id: 3, value: 8},
            {id: 4, value: 9},
        ]
    }

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId)
        this.setState({counters})
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        })

        this.setState({counters})
    }

    render() { 
        return ( 

        <div className="p-4" >
            <div className="m-3" >
                <h1>Total Counters: {this.state.counters.filter(c => c.value > 0).length}</h1>
            </div>
            <button onClick={this.handleReset} className="btn btn-primary btn-lg mb-3" >Reset</button>
            {this.state.counters.map(counter => 
                <Counter 
                    key={counter.id} 
                    onIncerement={this.handleIncrement}
                    onDelete={this.handleDelete}
                    counter={counter}
                />
            )}
        </div> );
    }
}
 
export default Counters;
