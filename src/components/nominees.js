// import React from 'react'
//stateless component

// function Nominees(){
//   return (
//     <h4>nominees go here</h4>
//   )
// }

// export default Nominees


import React, { Component } from 'react';

class Nominees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nominees: this.props.nominees,
    }
  }

  componentDidUpdate(prevProps) {
    // if (this.props.nominees.length !== prevProps.nominees.length) {
    //   this.setState({
    //     nominees: this.props.nominees,
    //   })
    // }
  }

  render() {
    const nomi = this.state.nominees
    return (
      <h4>nominees go here{nomi}</h4>
    )
  }
}

export default Nominees;
