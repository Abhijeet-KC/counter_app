import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counter: [
            {id: 1, value: 0, allowNegative: false},
            {id: 2, value: 1, allowNegative: false},
            {id: 3, value: 1, allowNegative: false},
            {id: 4, value: 3, allowNegative: false}
        ]
     };

    handleDelete = del_handler => {
        const counter = this.state.counter.filter(x => x.id !== del_handler);
        this.setState({counter});
        };

    handleReset = () => {
        const counter = this.state.counter.map(x => {
            x.value = 0;
            return x;
        })
        this.setState({counter});
    };

    handleIncrement = inc_handler => {
        const counter = [...this.state.counter];
        const index = counter.indexOf(inc_handler);
        counter[index] = {...inc_handler};
        counter[index].value++; 
        this.setState({ counter });
    };

    handleDecrement = dec_handler => {
        const counter = [...this.state.counter];
        const index = counter.indexOf(dec_handler);
        counter[index] = {...dec_handler};
        if ( counter[index].value > 0 || counter[index].allowNegative)
            {
                counter[index].value--;
                this.setState ({ counter });

            }
    };

    toggleAllowNegative = neg_handler => {
        const counter = [...this.state.counter];
        const index = counter.indexOf(neg_handler);
        counter[index] = {...neg_handler};
        counter[index].allowNegative = !counter[index].allowNegative;
        this.setState ({ counter });

    };

    render() { 
        return (
            <React.Fragment>
                <button 
                onClick={this.handleReset}
                className="btn-primary btn-sm">Reset</button>
                {this.state.counter.map(counters => 
                (<Counter 
                    key = {counters.id}
                    onDelete = {this.handleDelete}
                    onIncrement = {this.handleIncrement}
                    onDecrement = {this.handleDecrement}
                    onToggle = {this.toggleAllowNegative}
                    counter = {counters}     
                />)
                )}
            </React.Fragment>
        );
    }
}
 
export default Counters;
