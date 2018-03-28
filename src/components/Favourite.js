import React, { Component } from 'react';


class Favourite extends Component{

// LIST OF FAVOURITE FILMS
  state={
    favourite : [],
    favList: this.props.favList
  }

//  ADDING FILMS TO FAVOURITE
add = () => {
  let favArr = this.state.favourite
  if (favArr.includes(this.props.title)) {
      this.setState({ favList: <span className="favouriteAdd text-white bg-warning">Film already in your favourites!</span>})
      setTimeout(() => {
             this.setState({favList:false});
        },2000);
  }else{
    favArr.push(this.props.title)
    this.setState({
      favourite: favArr,
    })
  }
}

// REMOVING FILMS FROM FAVOURITE
remove = (index) => {
  let favArr = this.state.favourite;
  favArr.splice(index, 1)
  this.setState({ favourite: favArr, favList:false })
}

// MAPPING THROUGH FAVOURITE FILMS
  render(){
    let favourite = this.state.favourite.map((index, key) => {
      return (
      <div key={key} >{index}
        <button className="btn btn-outline-danger m-3" onClick={() => this.remove(key)}>Remove from favourite</button>
      </div>
    )
    })
// RENDERING LIST OF FAVOURITE FILMS
    return(
      <div className="container favourite-container d-flex flex-column justify-content-space-between">
       <p className="text-center"><span className="text-primary">Your</span> favourite films: </p>
        {favourite}
        {this.state.favList}
        <button className=" btn btn-outline-info my-3 mb-5" onClick={this.add}>Add to favourite</button>
      </div>
    )
  }
}
export default Favourite;
