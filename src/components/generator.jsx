import React, { Component } from "react";
class Generator extends Component {
  state = {};
  render() {
    return (
      <div>
        <label>
          <input
            type="text"
            name="text1"
            placeholder={this.props.text1}
            value={this.props.text1}
            onChange={this.props.onTextChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="text2"
            placeholder={this.props.text2}
            value={this.props.text2}
            onChange={this.props.onTextChange}
          />
        </label>
        <button
          type="submit"
          onClick={this.props.onGenerate}
          className="btn btn-primary  m-2"
        >
          Gen
        </button>
      </div>
    );
  }
}

export default Generator;
