import React, { Component } from 'react';
//import { SearchBox } from './index'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testPass: this.props.myTitle
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
  }

  onTrigger = (event) => {
    this.props.parentCallback("Data from child")
    event.preventDefault()
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSearchSubmit(event) {
    //alert('A title was submitted: ' + this.state.title);
    this.props.searchSubmitCB(this.state.title)
    event.preventDefault()
    this.setState({
      title: ""
    })
  }

  render() {
    const { testPass } = this.state
    console.log('render this.props', this.props)
    return (

      <div>
        <div>
          <form onSubmit={this.onTrigger}>
            <input type="submit" value="Submit" />
          </form>
        </div>

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

export default Search;
