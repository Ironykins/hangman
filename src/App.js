import React, { Component } from 'react';
import hangman from './Hangman';
import strings from './strings';
import Console from 'react-console-component';
import TypedReact from './Typed.js';
import './App.css';
import './crt.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.terminalStyle = {
      margin: "auto", 
      textAlign: "left", 
      fontFamily: 'mono', 
      color: 'green', 
      // fontWeight: 'bold',
      overflow: 'auto'
    }

    this.state = {
      hangmanState: 0,
      questionState: 0
    }

    this.messageLog = [<TypedReact strings={[strings.questions[this.state.questionState].question]} onComplete={this.enableTerm.bind(this)}/>];

    this.console = {};
  }

  advanceHangman() {
    this.setState({hangmanState: this.state.hangmanState + 1})
  }

  advanceQuestion() {
    this.setState({questionState: this.state.questionState + 1})
    
    if(this.state.questionState < strings.questions.length - 1) {
      var message = strings.questions[this.state.questionState].successMessage + '\n\n' + strings.questions[this.state.questionState+1].question
      this.logResponse(message)
    }
  }

  commandParse(text) {
    var answer = strings.questions[this.state.questionState].answer;
    
    if(text.toUpperCase().localeCompare(answer.toUpperCase()) === 0) {
      this.advanceQuestion();
    } else {
      this.advanceHangman();
      this.logResponse(strings.negatory[Math.floor((Math.random() * (strings.negatory.length)))]);
    }
  }

  enableTerm() {
    if(this.console) this.console.return();
  }

  logResponse(text) {
    this.messageLog.push(<TypedReact strings={[text]} onComplete={this.enableTerm.bind(this)}/>)
  }

  componentDidUpdate() {
    this.messageArea.scrollTop = this.messageArea.scrollHeight - this.messageArea.clientHeight;
    this.consoleArea.scrollTop = this.consoleArea.scrollHeight - this.consoleArea.clientHeight;
  }

  render() {
    return (
      <div className="App">
        {/* <input type="checkbox" id="switch" defaultChecked/>
        <label htmlFor="switch" className="switch-label">Turn </label> */}
        
        <div className="container" style={this.terminalStyle} onClick={() => {this.console.focus()}}>
          {/* Failure */}
          {this.state.hangmanState >= hangman.length && <TypedReact strings={strings.failure}/>}

          {/* Success */}
          {this.state.questionState >= strings.questions.length && <TypedReact strings={strings.success}/>}
          
          <div hidden={this.state.hangmanState >= hangman.length || this.state.questionState >= strings.questions.length}>
            <div style={{float: "right"}}>
              {hangman[this.state.hangmanState]}
            </div>

            <div style={{height: "200px", overflow: "auto"}} ref={(ref) => {this.messageArea = ref}}>
              {this.messageLog.map((itm,idx) => {
                return <div key={idx}>{itm}</div>
              })}
            </div>

            <div>====================================================</div>
            <div style={{height: "200px", overflow: "auto"}} ref={(ref) => {this.consoleArea = ref}}>
              <Console ref={ref => this.console = ref}
                handler={this.commandParse.bind(this)}
                autofocus={true}
              />
            </div>
          </div>
        </div>
        <p style={{color: '#111'}}>A heart is the only thing that really bleeds.</p>
      </div>
    );
  }
}

export default App;
