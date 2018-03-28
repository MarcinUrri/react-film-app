import React, { Component } from 'react';
import '../index.css';
import Favourite from './Favourite'


class Movies extends Component {

  render() {
    // DISPLAYING SEARCHED FILM INFORMATIONS (ONLY WHEN SEARCHED FOR ONE)
    const displayContent = this.props.display;
    return (
      <div className="films-part">
        {displayContent ? (
          <div><span className="text-primary">Title: </span>{this.props.title}
          <div><img src={this.props.poster} alt="Movie poster" className="img-fluid"></img></div>
          <div><span className="text-primary">Production year:</span> {this.props.year}</div>
          <div> <span className="text-primary">Type: </span>{this.props.type}</div>
          <Favourite title={this.props.title} favList={this.props.favList} /></div>
        ) : (
          <div>Go <span className="text-primary">ahead</span> and search for movies!</div>
        )}
      </div>
    );
  }
}

export default Movies;
