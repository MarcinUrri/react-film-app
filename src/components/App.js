import React, { Component } from 'react';
import '../index.css';
import Titles from './Titles'
import Form from './Form'
import Movies from './Movies'




class App extends Component {

// MOVIE STATES
  state = {
    title: undefined,
    poster: undefined,
    type: undefined,
    year: undefined,
    error: undefined,
    display: false,
    favList: false
  }
// GETTING THE API CALL
  getMovies = async (e) => {
    e.preventDefault();
    const movie = e.target.elements.title.value;
    const api_call = await fetch(`https://www.omdbapi.com/?apikey=f9d2b4ac&s=${movie}`);
    const data = await api_call.json();
    // UPDATING MOVIE STATES
    if (movie) {
      this.setState({
        title: data.Search[0].Title,
        poster: data.Search[0].Poster === "N/A" ? "http://makeupstudio.lu/html/images/poster/no_poster_available.jpg" : data.Search[0].Poster,
        year: data.Search[0].Year,
        type: data.Search[0].Type,
        error: "",
        display:true,
        favList: <span></span>
      });
    }
  }

  render() {
// RENDERING  MOVIE INFORMATIONS
    return (
      <div className="container d-flex flex-row w-100 justify-content-center">
          <div className="w-90">
            <Titles />
            <Form getMovies={this.getMovies}/>
            <Movies
             title={this.state.title}
             poster={this.state.poster}
             year={this.state.year}
             type={this.state.type}
             error={this.state.error}
             display={this.state.display}
             favList={this.state.favList}
            />
        </div>
      </div>

    );
  }
}

export default App;
