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
      messageCounter: 1,
      hangmanState: 0,
      questionState: 0,
      messageLog: [<TypedReact key={0} strings={[strings.questions[0].question]} onComplete={this.enableTerm.bind(this)}/>]
    }

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
    
    if(text.toUpperCase().includes(answer.toUpperCase())) {
      this.advanceQuestion();
    } else {
      this.advanceHangman();
      this.logResponse(strings.negatory[Math.floor((Math.random() * (strings.negatory.length)))]);
    }
  }

  enableTerm() {
    this.setState({started:true})
    if(this.console) this.console.return();
  }

  logResponse(text) {
    console.log(this.state.messageCounter)
    var newMessage = <TypedReact key={this.state.messageCounter} strings={[text+"\n"]} onComplete={this.enableTerm.bind(this)}/>
    this.setState({messageLog: [newMessage,...this.state.messageLog], messageCounter: this.state.messageCounter+1})
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

            <div style={{height: "200px", overflow: "auto", overflowX: "wrap", display: "flex", flexDirection: "column-reverse"}} ref={(ref) => { this.messageArea = ref }}>
              {this.state.messageLog}
              
              
            </div>

            <div>====================================================</div>
            <div style={{height: "200px", overflow: "auto", overflowX: "wrap"}} ref={(ref) => {this.consoleArea = ref}}>
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
