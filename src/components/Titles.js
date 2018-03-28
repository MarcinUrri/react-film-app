import React, { Component } from 'react';
import '../index.css';


class Titles extends Component {
  render() {
// RENDERING TOP PAGE INFORMATIONS
    return (
      <div className="container">
        <h1 className="display-4"><span className="text-primary">Film</span> Finder</h1>
        <p className="lead">Find informations about <span className="text-primary">your</span> favourite films!</p>
      </div>

    );
  }
}
export default Titles;
