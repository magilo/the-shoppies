import React, { Component } from 'react';

class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ""
    }
    this.props = props
    this.handleChange = this.handleChange.bind(this)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)

  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSearchSubmit(event) {
    event.preventDefault()
    this.setState({
      title: ""
    })
  }

  render() {
    const currtitle = this.state.title
    return (
      <div>
        <h3>title: {currtitle}</h3>
        <div className="form">
          <form onSubmit={this.handleSearchSubmit}>
            <div>
              <input
                name="title"
                type="text"
                value={this.state.title}
                placeholder="e.g. Rambo"
                onChange={this.handleChange}
              />
            </div>

            <div>
              <button type="submit" onSubmit={this.handleSearchSubmit}>
                {' '}
                submit{' '}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchBox;
