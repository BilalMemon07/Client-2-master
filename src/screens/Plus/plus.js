import React, { Component } from 'react'




class Plus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem  ()  {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  render() {
    return (
      <div>
        <button onClick={()=>this.IncrementItem()}>Click to increment by 1</button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
      </div>
    );
  }
}

export default Plus;