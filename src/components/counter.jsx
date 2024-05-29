import React, { Component } from 'react'
class Counter extends Component {

    state = {

        imageUrl: `https://picsum.photos/200/200?random=${this.props.counter.id}`,
        tag: ['stay delusional', 'stay fit', 'stay hard', 'stay hungry', 'stay foolish'], 
    };
    
    style = { 

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2px'
    };

    render() {  

        return (<React.Fragment>

        <img style = {this.style} src={this.state.imageUrl} className = "border-2 border-dark rounded-circle" alt=""/>

        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button 
        onClick={() => this.props.onIncrement(this.props.counter)}
        className="btn btn-success btn-sm"
        >Increment</button>

        <button 
        onClick={() => this.props.onDecrement(this.props.counter)}
        className="btn-dark btn-sm m-2"
        disabled={this.props.counter.value === 0  && !this.props.counter.allowNegative ? 'disabled' : ''}
        >Decrement</button>
        
        <button onClick = {() => this.props.onDelete(this.props.counter.id)} className="btn-danger btn-sm mr-2">Delete</button>

        <input
            type = "checkbox"
            onChange = {() => this.props.onToggle(this.props.counter.allowNegative)}
            checked = {this.props.counter.allowNegative}
        />
        Allow Negative Count

        <ul>
            {this.state.tag.map(tag => <li key = {tag}>{tag}</li>)}
        </ul>

        </React.Fragment>);
    }

    getBadgeClasses() {

        let classes ="badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;

    }
    formatCount() {

        const {value: count} = this.props.counter;
        return count === 0 ? 'Zero' : count;

    }
}
 
export default Counter;