import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.searchResults
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchResults !== prevProps.searchResults) {
      this.setState({ results: this.props.searchResults })

    }
  }

  render() {
    console.log('render this.props', this.props)
    //console.log('results state', this.state)
    const allResults = this.state.results //array
    if (Array.isArray(allResults)) {
      const listItems = allResults.map((res) =>
        <li key={res.imdbID}>
          {res.Title}({res.Year})
        </li>
      );
      return (
        <ul>{listItems}</ul>
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
