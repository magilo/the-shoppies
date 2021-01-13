import React, { Component } from 'react';
import { Nominees, Search, Results } from './index'

class Nominations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ""
    }
  }


  render() {
    const currtitle = this.state.title
    return (
      <div>
        <Nominees />
        <h3>title: {currtitle}</h3>
        <Search />
        <Results />
      </div>

    )
  }
}

export default Nominations;
