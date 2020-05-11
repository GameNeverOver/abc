import React, { Component } from 'react';

export default class Props extends Component{
    render(){
        console.log(this.props,'xx')
        return<div>
            {this.props.a}
            <p>23</p>
            
        </div>
    }
}