import React, { Component } from 'react';

class Nominees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nominees: this.props.currNominees,
    }
    this.handleDeleteNominee = this.handleDeleteNominee.bind(this)
  }

  handleDeleteNominee(event) {
    //alert(event.target.value)
    event.preventDefault()
    this.props.deleteNomineeCB(event.target.value) //value is imdbID
  }


  componentDidUpdate(prevProps) {
    if (this.props.currNominees.length !== prevProps.currNominees.length) {
      this.setState({
        nominees: this.props.currNominees
      })
    }
  }

  render() {
    const { nominees } = this.state
    //console.log('nominees render', nominees)
    if (Array.isArray(nominees) && nominees.length > 0) {
      const listItems = nominees.map((n) =>
        <li key={n.imdbID}>
          {n.Title}({n.Year})
          <button
            value={n.imdbID}
            onClick={this.handleDeleteNominee}>
            x
        </button>
        </li>
      );
      return (
        <div>
          <ul>{listItems}</ul>
        </div>
      );
    }
    else {
      return (
        <div></div>
      )
      // <h4>nominees go here</h4>

    }

  }
}

export default Nominees;
