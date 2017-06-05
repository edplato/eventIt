import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main.js';
import Editor from './Editor.js';
import './App.css';

class App extends Component {
 constructor() {
    super();
    this.state = {
      eventTitle: '',
      eventDescription: '',
      eventLocation: '',
      eventDateStart: '',
      eventDateEnd: ''
    }

  }

  handleChangeStartOrEnd = (startOrEnd, startDate, e) => {
    var reformattedStartDate = new Date(startDate).toDateString();
    this.setState({
        [startOrEnd]: reformattedStartDate
    });
  }

  handleInputChange = (propertyName, e) => {
    this.setState({ [propertyName]: e.target.value });
  }

  render() {
    return (
      <div className="App">

        <Switch>

          <Route exact path="/" render={(props) => (
            <Main {...props} 
            eventTitle={this.state.eventTitle}
            eventDescription={this.state.eventDescription}
            eventLocation={this.state.eventLocation}
            eventDateStart={this.state.eventDateStart}
            eventDateEnd={this.state.eventDateEnd}
           
            />
            )}/>

          <Route path="/editor" render={(props) => (
            <Editor {...props} 
            eventTitle={this.state.eventTitle}
            eventDescription={this.state.eventDescription}
            eventLocation={this.state.eventLocation}
            eventDateStart={this.state.eventDateStart}
            eventDateEnd={this.state.eventDateEnd}


            handleChangeStartOrEnd={this.handleChangeStartOrEnd}
            handleInputChange={this.handleInputChange}

            />
            )}/>
        </Switch>

      </div>
    );
  }
}

export default App;
