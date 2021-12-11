import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super()

        this.state = {
            count: 0
        }
    }

    increment() {
        //   this work with UI & update the state
        // this.setState({
        //     count: this.state.count + 1
        // })

        //   & if we want update state & some code simultanously execute,setState is asynchronously behave...

        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log('callback value:' + this.state.count);
        // })


        this.setState(prevState => ({
            count:prevState.count+1
        }))
        console.log(this.state.count);    

        // this thing is not effect on UI . this thing is work only console
        // this.state.count = this.state.count +1;
        // console.log(this.state.count);
    }

    incrementFive() {
        //   React transfer multiple calls to single call thatwhy ans is not correct
        // to get the right answer we should make an function instead of object
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <h1>Counter:{this.state.count}</h1>
                <button onClick={() => this.incrementFive()}>Increment Value</button>
            </div>
        )
    }
}

export default Counter
