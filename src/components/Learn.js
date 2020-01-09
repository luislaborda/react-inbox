import React from 'react'

class Learn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numOfClicks: 0
          };
        this.handle = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({numOfClicks: this.state.numOfClicks + 1});
        console.log('From handleClick()', this);
      }

    render() {
        console.log('From render()', this);
        return (
            <div>
                <button onClick={ this.handle }>Click Me!</button>
                { <p>Number of Times Clicked = {this.state.numOfClicks}</p> }
            </div>
        )
    }
}

export default Learn;