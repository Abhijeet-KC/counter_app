import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counter: [
            {id: 1, value: 0},
            {id: 2, value: 1},
            {id: 3, value: 1},
            {id: 4, value: 3}
        ]
     } 
    render() { 
        return (
            <React.Fragment>
                {this.state.counter.map(counters => 
                (<Counter key={counters.id} value={counters.value}/>)
                )}
            </React.Fragment>
        );
    }
}
 
export default Counters;
