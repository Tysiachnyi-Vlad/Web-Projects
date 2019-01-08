import React, { Component } from 'react';
import './App.css';
import RenderableText from './components/renderableText';
import StyleButtons from './components/styleButtons';

class App extends Component {
  constructor(){
    super();
    this.state = {
      randomString: '',
      selectedText: ''
    }

    this.onChangeText = this.onChangeText.bind(this);
    this.doubleClicked = this.doubleClicked.bind(this);
  }
  componentDidMount(){
    this.createRandomString();
  }

  //Create random string for text area

  createRandomString(){
    let text = "";
    let possible = "ABC DEF GHIJKLMNO PQRS TUV WXYZab cde fghijkl mnopqrs tuvwx yz0123 456789";
    
    for (let i = 0; i < 25; i++){
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    this.setState({randomString: text});
  }

  //change text in text area

  onChangeText(e){
    this.setState({randomString: e.target.value});
  }

  //Hande double click on text area

  doubleClicked(e, textAreaRef){
    let cursorStart = textAreaRef.selectionStart;
    let cursorEnd = textAreaRef.selectionEnd;

   this.setState({
     selectedText:this.state.randomString.substring(cursorStart,cursorEnd)
    });
    console.log("Marked line: " + this.state.randomString.substring(cursorStart,cursorEnd));
  }
 
//////////////////////
  render() {
    return (
      <div className="App">
        <StyleButtons />
        <RenderableText text = {this.state.randomString} onChangeText = {this.onChangeText} doubleClicked = {this.doubleClicked} />
      </div>
    );
  }
//////////
}

export default App;
