import React, { Component } from "react";

class NavBar extends Component {
  state = {
    picPercent: "10%",
    imgSrc: "http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
  };

  render() {
    return (
      <header>
        <img
          src={this.state.imgSrc}
          alt="problem"
          width={this.state.picPercent}
          height={this.state.picPercent}
        />
        <p className="navbar-brand" href="#">
          Meme Generator
        </p>
      </header>
    );
  }
}

export default NavBar;
