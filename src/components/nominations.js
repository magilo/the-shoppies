import React, { Component } from 'react';
import { Nominees, Search, Results, getSearchResults } from './index'

/*
top level component
*/
class Nominations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      results: "",
      nominees: [],
      data: "",
      searchError: ""
    }
    this.handleSearchSubmitCB = this.handleSearchSubmitCB.bind(this)
    this.handleResultSubmitCB = this.handleResultSubmitCB.bind(this)
  }


  handleSearchSubmitCB = (childData) => {
    const wrapper = async () => {
      const apiData = await getSearchResults(childData)
      console.log('apiData', apiData)
      if (apiData.Response === 'False') {
        this.setState({
          results: "",
          searchError: apiData.Error
        })
      } else {
        this.setState({
          results: apiData.Search,
          searchError: ""
        })
      }
    }
    wrapper()
    this.setState({ title: childData })
  }


  handleResultSubmitCB = (childData) => {
    this.setState({ nominees: this.state.nominees }, function () {
      let nomineesLen = this.state.nominees.length
      if (nomineesLen === 0) {
        this.setState({ nominees: [...this.state.nominees, childData] }, () => {
          console.log('nominees === 0', this.state.nominees);
        });
      } else if (nomineesLen > 0 && nomineesLen < 5) {
        this.setState({ nominees: [...this.state.nominees, childData] }, () => {
          console.log('nomi <= 5', this.state.nominees)
        });
      } else {
        alert('you have already selected 5 nominees');
      }
    });
  }






  render() {
    const { title, results, nominees, searchError } = this.state
    return (
      <div>
        <Nominees currNominees={nominees} />
        <Search searchSubmitCB={this.handleSearchSubmitCB} />
        <Results
          searchResults={results}
          searchTitle={title}
          currNominees={nominees}
          searchError={searchError}
          resultSubmitCB={this.handleResultSubmitCB} />
      </div>

    )
  }
}

export default Nominations;
