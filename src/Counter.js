import React from 'react';
import './counter.css';

export default class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {count: 0};
        this.inc = this.inc.bind(this)
        this.dec = this.dec.bind(this)
    }
    inc(){
        let count=this.state.count +1
        this.setState({count});

    }
    dec(){
        let count=this.state.count -1
        this.setState({count});
        
    }
    render(){
        return(
            <div className="counter">
                <h3>Counter</h3>
                <div>{this.state.count}</div>
                <button onClick={this.inc}>++</button>
                <button onClick={this.dec}>--</button>
            </div>
        );
    }


}
