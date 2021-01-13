import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.searchTitle,
      results: this.props.searchResults
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchResults !== prevProps.searchResults) {
      this.setState({
        results: this.props.searchResults,
        title: this.props.searchTitle
      })

    }
  }

  render() {
    console.log('render this.props', this.props)
    //console.log('results state', this.state)
    const allResults = this.state.results //array
    const title = this.state.title
    if (Array.isArray(allResults)) {
      const listItems = allResults.map((res) =>
        <li key={res.imdbID}>
          {res.Title}({res.Year})
        </li>
      );
      return (
        <div>
          <p>showing results for "{title}"</p>
          <ul>{listItems}</ul>
        </div>
      );
    } else {
      return (
        <h4>enter title in search</h4>
      )
    }
    // console.log('allResults', Array.isArray(allResults), typeof allResults)


  }
}

export default Results;
