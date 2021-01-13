import React, { Component } from 'react';
import { Nominees, Search, Results, getSearchResults } from './index'
import axios from 'axios'
const { APIToken } = require('../secrets')

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
    this.handleSearchSubmitCB = this.handleSearchSubmitCB.bind(this)
  }


  handleSearchSubmitCB = (childData) => {
    const wrapper = async () => {
      const apiData = await getSearchResults(childData)

      this.setState({ results: apiData.Search })
      //console.log('state inside', this.state)
    }
    wrapper()
    //console.log('test', test)
    //console.log('state', this.state)
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
        <Results searchResults={results} searchTitle={title} />
      </div>

    )
  }
}

export default Nominations;
