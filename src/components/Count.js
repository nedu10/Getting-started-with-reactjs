import React, { Component } from 'react'  //snipet rce

export class Count extends Component {

    constructor(props) { //snippet rconst
      super(props)
                    // you can use this.state to change the state only on th constructor
      this.state = {
         count: 0
      }
    }
    increment() { 
        this.setState({  //set state tells react that it has to  re-render the component
            count: this.state.count + 1
        }, () => {
            console.log('calback value >> ',this.state.count) //whenever you want to execute some code after the state has change
                                                             // place that code in a callback
        })
        console.log('showing count >> ',this.state.count)
    }
    
  render() {
    return (
      <div>
        <h4>Count : {this.state.count}</h4>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Count
