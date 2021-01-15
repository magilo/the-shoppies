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
        <div className="movie" key={n.imdbID}>
          <img id="poster" src={n.Poster} alt={n.imdbID} />
          <span className="movie">{n.Title} ({n.Year})</span>
          <button
            id="poster"
            type="remove"
            value={n.imdbID}
            onClick={this.handleDeleteNominee}>
            x
        </button>
        </div>
      );
      return (
        <div className="nominee-list">
          {listItems}
        </div>
      );
    }
    else {
      return (
        <div className="nominee-list"></div>
      )
      // <h4>nominees go here</h4>

    }

  }
}

export default Nominees;

/*
each nominee object
Poster: "https://m.media-amazon.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_SX300.jpg"
Title: "Rambo"
Type: "movie"
Year: "2008"
imdbID: "tt0462499"
*/
