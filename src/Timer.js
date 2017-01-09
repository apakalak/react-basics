import React from 'react'
import './timer.css'

export default class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {counter: 0};
        this.go = this.go.bind(this);
        this.timer = null
    }
    go(){
        clearInterval(this.timer);
        let start = this.num.value
        this.setState({counter :start})
        this.timer = setInterval(() => {
            let counter = this.state.counter - 1
            if(counter === 0){
                clearInterval(this.timer);
            }
            this.setState({counter})
        }, 1000)
    }
    render(){
        return <div className="timer">
            <h3>Timer</h3>
            <input ref={node => this.num = node}type="number"></input>
            <button onClick = {this.go}>Go!</button>
            <span id="timerResult">{this.state.counter}</span>
        </div>
    }

}