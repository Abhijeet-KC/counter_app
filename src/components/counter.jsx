import React, { Component } from 'react'
class Counter extends Component {

    state = {
        value: this.props.counter.value,
        imageUrl: `https://picsum.photos/200/200?random=${this.props.counter.id}`,
        tag: ['stay delusional', 'stay fit', 'stay hard', 'stay hungry', 'stay foolish']
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
        this.setState ({value: this.state.value - 1});
    };

    render() {  
        console.log('props', this.props);
        return (<React.Fragment>
        <img style = {this.style} src={this.state.imageUrl} className = "border-2 border-dark rounded-circle" alt=""/>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button 
        onClick={() => this.handleIncrement({value: this.state.value + 1})}
        className="btn btn-success btn-sm"
        >Increment</button>
        <button 
        onClick={ () => this.handleDecrement(this.state.value === 0 ? (<p>Cant decrease anymore</p>) : {value: this.state.value - 1})}
        className="btn-dark btn-sm m-2">Decrement</button>
        <button onClick = {() => this.props.onDelete(this.props.counter.id)} className="btn-danger btn-sm">Delete</button>
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