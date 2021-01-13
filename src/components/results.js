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
    const { results } = this.state
    return (
      <h4>showing results for "{results}" </h4>
    )
  }
}

export default Results;
