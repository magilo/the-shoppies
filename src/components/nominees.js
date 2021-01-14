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
      nominees: this.props.currNominees,
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.currNominees.length !== prevProps.currNominees.length) {
      this.setState({
        nominees: this.props.currNominees
      })
    }
  }

  render() {
    const { nominees } = this.state
    if (Array.isArray(nominees) && nominees.length > 0) {
      const listItems = nominees.map((n) =>
        <li key={n.imdbID}>
          {n.Title}({n.Year})

        </li>
      );
      return (
        <div>
          <ul>{listItems}</ul>
        </div>
      );
    } else {
      return (
        <h4>nominees go here</h4>
      )
    }

  }
}

export default Nominees;
