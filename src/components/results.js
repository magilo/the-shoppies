import React, { Component } from 'react';
import { movieExists } from './index'

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.searchTitle,
      results: this.props.searchResults,
      nominees: this.props.currNominees,
      error: this.props.searchError
    }
    this.handleResultSubmit = this.handleResultSubmit.bind(this)
  }

  handleResultSubmit(movieData, event) {
    event.preventDefault()
    this.props.resultSubmitCB(movieData)

  }

  componentDidUpdate(prevProps) {
    if (this.props.searchResults !== prevProps.searchResults) {
      this.setState({
        results: this.props.searchResults,
        title: this.props.searchTitle
      })
    }
    if (this.props.currNominees.length !== prevProps.currNominees.length) {
      this.setState({
        nominees: this.props.currNominees
      })
    }
    if (this.props.searchError !== prevProps.searchError) {
      this.setState({
        error: this.props.searchError
      })
    }
  }

  render() {
    const { title, nominees } = this.state
    const allResults = this.state.results //array
    const error = this.state.error

    if (Array.isArray(allResults)) {
      const listItems = allResults.map((res) =>
        <p key={res.imdbID}>
          {res.Title} ({res.Year})---
          <button
            value={res.Title}
            disabled={movieExists(res.imdbID, nominees)}
            onClick={this.handleResultSubmit.bind(this, res)}>
            nominate
        </button>
        </p>
      );
      return (
        <div>
          <h4>showing results for "{title}"</h4>
          <div id="results-list">{listItems}</div>
        </div>
      );
    } else if (error.length !== 0) {
      return (
        <h4>{error}</h4>
      )
    } else {
      return (
        <h4>enter title in search</h4>
      )
    }
  }
}

export default Results;


/*
search results is an array of up to 10 objects
[{}, {}, {}, {}...]
0:
Poster: "https://m.media-amazon.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_SX300.jpg"
Title: "Rambo"
Type: "movie"
Year: "2008"
imdbID: "tt0462499"
*/
