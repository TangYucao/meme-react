import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Generator from "./components/generator";
import NavBar from "./components/navbar";
import Picture from "./components/picture";

class App extends Component {
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({
          allMemeImges: memes
        });
        console.log(this.state.allMemeImges[0]);
        console.log(this.state.imgId);
      });
  }
  constructor() {
    super();
    this.state = {
      generateImgPercent: "40%",
      generateText1: "One Does Not Simply ",
      generateText2: "Walk into Mordor",
      randomimage: "https://imgflip.com/s/meme/One-Does-Not-Simply.jpg",
      allMemeImges: []
    };
  }

  handleGenerate = () => {
    const index = Math.floor(this.state.allMemeImges.length * Math.random());
    this.setState({
      randomimage: this.state.allMemeImges[index].url,
      generateText1: this.state.generateText1,
      generateText2: this.state.generateText2
    });
  };
  handleTextChange = event => {
    switch (event.target.name) {
      case "text1": {
        this.setState({
          generateText1: event.target.value
        });
        break;
      }
      case "text2": {
        this.setState({
          generateText2: event.target.value
        });
        break;
      }
      default:
        break;
    }
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
        // totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Generator
            text1={this.state.generateText1}
            text2={this.state.generateText2}
            onTextChange={this.handleTextChange}
            // onTextChange2={this.handleTextChange2}
            onGenerate={this.handleGenerate}
          />
          <Picture
            imgPercent={this.state.generateImgPercent}
            randomimage={this.state.randomimage}
            text1={this.state.generateText1}
            text2={this.state.generateText2}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
