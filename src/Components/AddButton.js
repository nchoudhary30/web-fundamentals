import React, { PureComponent } from 'react'

class AddButton extends PureComponent {
  render() {
    return (
      <button onClick={()=>this.props.increaseCounter()}>Add Counter</button>
    )
  }
}

export default AddButton    