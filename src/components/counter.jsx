import React, { Component } from 'react'
class Counter extends Component {

    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200',
        tag: ['tag1', 'tag2', 'tag3']
    };
    
    style = { 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2px'
    };

    handleIncrement = () => {
        this.setState({count: this.state.count + 1});
    }

    render() {
       
        return (<React.Fragment>
        <img style = {this.style} src={this.state.imageUrl} class = "border-2 border-dark rounded-circle" alt=""/>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button 
        onClick={this.handleIncrement}
        className="btn btn-secondary btn-sm"
        >Increment</button>
        <ul>
            {this.state.tag.map(tag => <li key = {tag}>{tag}</li>)}
        </ul>
        </React.Fragment>);
    }

    getBadgeClasses() {
        let classes ="badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;