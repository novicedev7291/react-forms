import React, { Component } from 'react';
import './App.css';
import SimpleForm from './SimpleForm';
import { SubmissionError } from 'redux-form';

class App extends Component {
  handleSimpleFormSubmit = values => {
      if(values.username === "kuldeep-yadav"){
        throw new SubmissionError({
          username: "This username is not valid"
        });
      }
      console.log(values);
  };
  getInitialValues = () => {
    return {
      username: "kuldeep-yadav",
      remember: "checked"
    }
  };
  render(){
    return (
      <div className="App App-header">
        <h1 className="App__header">Simple form</h1>
        <SimpleForm onSubmit={this.handleSimpleFormSubmit} initialValues={this.getInitialValues()} />
      </div>
    );
  }
}

export default App;
