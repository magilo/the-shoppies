import React, { Component } from 'react';
import { Nominees, Search, Results } from './index'

/*
top level component
*/
class Nominations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      testPass: "hello",
      data: ""
    }
  }

  handleCallback = (childData) => {
    this.setState({ data: childData })
  }

  handleSearchSubmitCB = (childData) => {
    this.setState({ title: childData })
  }

  render() {
    const { title, testPass, data } = this.state
    return (
      <div>
        <Nominees />
        <h3>data: {data}</h3>
        <Search myTitle={testPass}
          parentCallback={this.handleCallback}
          searchSubmitCB={this.handleSearchSubmitCB} />
        <h3>selectedTitle: {title}</h3>
        <Results />
      </div>

    )
  }
}

export default Nominations;
