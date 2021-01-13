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
      results: "",
      nominees: "",
      data: ""
    }
  }


  handleSearchSubmitCB = (childData) => {
    this.setState({ title: childData })
  }

  handleResultSubmitCB = (childData) => {
    let currNominees = this.state.nominees.slice()
    currNominees.push(childData)
    this.setState({ nominees: currNominees })
  }

  render() {
    const { title, results } = this.state
    return (
      <div>
        <Nominees />
        <Search searchSubmitCB={this.handleSearchSubmitCB} />
        {/* <h3>selectedTitle: {title}</h3> */}
        <Results searchResults={title} />
      </div>

    )
  }
}

export default Nominations;
