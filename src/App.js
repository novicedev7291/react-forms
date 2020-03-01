import React, { Component } from 'react';
import './App.css';
import SimpleForm from './SimpleForm';

class App extends Component {
  initialValues = {
    remember: true,
    username: "kuldeep-yadav"
  };
  handleSimpleFormSubmit = values => {
      console.log(values);
  }
  render(){
    return (
      <div className="App App-header">
        <h1 className="App__header">Simple form</h1>
        <SimpleForm onSubmit={this.handleSimpleFormSubmit} initialValues={this.initialValues} />
      </div>
    );
  }
}

export default App;
