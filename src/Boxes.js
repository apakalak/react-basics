import React from 'react'
import Box from './Box'
import './box.css'

export default class Boxes extends React.Component {
    constructor(props){
        super(props)
        //this.getColors = this.getColors.bind(this)
    }
    static getColors(){
        return {
            r : Boxes.generateRandom(),
            g : Boxes.generateRandom(),
            b : Boxes.generateRandom(),
            a : Math.random()
        }
    }

    static generateRandom() {
        return Math.floor((Math.random()) * 255);
    }

    render(){
        return (
        <div className="boxes">
        {
            Array(10).fill(null).map(( _ , index) => {
                return  <Box className="box" key={index} colors={Boxes.getColors()}/>
            })
        }
        </div> 
        );
    }
}
