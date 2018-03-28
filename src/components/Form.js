import React, { Component } from 'react';
import '../index.css';



const  Form = props =>  (
  // DISPLAYING USER FORM
      <form className="form-group" onSubmit={props.getMovies}>
        <input className="form-control" type="text" name="title" placeholder="Move title..."></input>
        <button className="btn btn-success btn-lg my-3">Get Movies</button>
      </form>
    );

export default Form;
