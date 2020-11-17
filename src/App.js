import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    inputStuff: [
      {
        paragraph: ''
      }
    ]
  };

  eventHandler = (event) => {
    this.setState({
      inputStuff :[{ paragraph: event.target.value }]
    })
  }

  deleteCharHandler = (index) => {
    const str = this.state.inputStuff[0].paragraph.split("");
    // remove the select chac
    str.splice(index,1);
    const newStr = str.join("")
    this.setState({
      inputStuff:[{paragraph:newStr}]
    })
  }
  render() {
    const strLength = this.state.inputStuff[0].paragraph.length;
    let str = "Text too short";
    if(strLength>= 5){
      str = "Text long enough"
    }

    const charArray = this.state.inputStuff[0].paragraph.split("");
    const letters = charArray.map((elem, index) => {
      return <Char letter={elem} key={index} clicked={()=> this.deleteCharHandler(index)} />
    })
    
    return (
      <div className="App">

        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input type="text"
          onChange={this.eventHandler}
          value={this.state.inputStuff[0].paragraph}/>
        {/* <p>{this.state.inputStuff[0].paragraph.length}</p> */}
      
        {/* <Validation length={this.state.inputStuff[0].paragraph.length} text={str}/> */}
        <Validation length={strLength} text={str} />
       {letters}
      </div>
    );
  }
}

export default App;
