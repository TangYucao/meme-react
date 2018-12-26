import React, { Component } from "react";
import "../style.css";
class Picture extends Component {
  render() {
    return (
      <div className="meme">
        <img
          //   className="Avatar"
          //   height={this.props.imgPercent}
          //   width={this.props.imgPercent}
          src={this.props.randomimage}
          alt="tyc"
        />
        <p className="top">{this.props.text1}</p>
        <p className="bottom">{this.props.text2}</p>
      </div>
    );
  }
}

export default Picture;
