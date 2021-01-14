import React, { Component } from 'react';
import { Nominees, Search, Results, Done, getSearchResults } from './index'

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
    this.handleDeleteNomineeCB = this.handleDeleteNomineeCB.bind(this)
  }

  //getSearchResults is an async func, need wrapper to get promise
  handleSearchSubmitCB = (childData) => {
    const wrapper = async () => {
      const apiData = await getSearchResults(childData)
      //console.log('apiData', apiData)
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

  //setState is an async func - setState(updater, [callback])
  handleResultSubmitCB = (childNominee) => {
    this.setState({ nominees: this.state.nominees }, function () {
      let nomineesLen = this.state.nominees.length
      if (nomineesLen === 0) {
        this.setState({ nominees: [...this.state.nominees, childNominee] }, () => {
          //console.log('nominees === 0', this.state.nominees);
        });
      } else if (nomineesLen > 0 && nomineesLen < 5) {
        this.setState({ nominees: [...this.state.nominees, childNominee] }, () => {
          //console.log('nomi <= 5', this.state.nominees)
        });
      } else {
        alert('you have already selected five(5) nominees');
      }
    });
  }

  handleDeleteNomineeCB = (childID) => {
    //console.log('delete n childData', childData)
    //console.log('this.state.nominees', this.state.nominees)
    const newList = this.state.nominees.filter((item) => item.imdbID !== childID)
    this.setState({ nominees: newList })
  }




  render() {
    const { title, results, nominees, searchError } = this.state
    let isDone = (nominees.length === 5) ? true : false

    return (
      <div className="App-section">
        <div className="nominees">
          <Nominees
            currNominees={nominees}
            deleteNomineeCB={this.handleDeleteNomineeCB} />
          <Done isDone={isDone} />
        </div>
        <div className="search-bar">
          <Search searchSubmitCB={this.handleSearchSubmitCB} />
        </div>
        <div className="results">
          <Results
            searchResults={results}
            searchTitle={title}
            currNominees={nominees}
            searchError={searchError}
            resultSubmitCB={this.handleResultSubmitCB} />
        </div>
      </div>

    )
  }
}

export default Nominations;
