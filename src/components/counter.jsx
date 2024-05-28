import React, { Component } from 'react'
class Counter extends Component {

    state = {
        value: this.props.counter.value,
        imageUrl: `https://picsum.photos/200/200?random=${this.props.counter.id}`,
        tag: ['stay delusional', 'stay fit', 'stay hard', 'stay hungry', 'stay foolish'],
        allowNegative: false
    };
    
    style = { 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2px'
    };

    handleIncrement = product => {
        console.log(product);
        this.setState({value: this.state.value + 1});
    };

    handleDecrement = x => {
        if (this.state.value > 0 || this.state.allowNegative)
        this.setState ({value: this.state.value - 1});
    };

    toggleAllowNegative = () => {
        this.setState({allowNegative: !this.state.allowNegative})
    };

    render() {  
        console.log('props', this.props);
        return (<React.Fragment>
        <img style = {this.style} src={this.state.imageUrl} className = "border-2 border-dark rounded-circle" alt=""/>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button 
        onClick={this.handleIncrement}
        className="btn btn-success btn-sm"
        >Increment</button>
        <button 
        onClick={this.handleDecrement}
        className="btn-dark btn-sm m-2"
        disabled={this.state.value === 0  && !this.state.allowNegative ? 'disabled' : ''}
        >Decrement</button>
        <button onClick = {() => this.props.onDelete(this.props.counter.id)} className="btn-danger btn-sm mr-2">Delete</button>
        <input
            type = "checkbox"
            onChange = {this.toggleAllowNegative}
            checked = {this.state.allowNegative}
        />
        Allow Negative Count
        <ul>
            {this.state.tag.map(tag => <li key = {tag}>{tag}</li>)}
        </ul>
        </React.Fragment>);
    }

    getBadgeClasses() {
        let classes ="badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        const {value: count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;