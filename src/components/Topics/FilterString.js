import React, { Component } from 'react';

export default class FilterString extends Component {

  constructor(){
    super()

    this.state = {
      names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
      userInput: '',
      filteredArray: []
    }
  }

  handleChange(val){
    this.setState({userInput: val})
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText"></span>
        <input className="inputLine" onChange = {(e) => this.handleChange(e.target.value)} />
        <button className="confirmationButton"> Filter </button>
        <span className="resultsBox filterStringRB"></span>
      </div>
    )
  }
}