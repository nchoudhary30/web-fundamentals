import React, { PureComponent } from 'react'

class Counter extends PureComponent{
    render(){
        return(
            <span>{this.props.counter}</span>
        )
    }
}

export default Counter