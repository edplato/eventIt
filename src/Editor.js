import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class Editor extends Component {
	constructor(props) {
    super(props);
    this.state = {
      event: '',
      startDate: moment(),
      endDate: moment()
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleChangeStart(date) {
    this.setState({
        startDate: date
    }, () => 
    this.props.handleChangeStartOrEnd('eventDateStart', date["_d"])
    );
  }

  handleChangeEnd(date) {
    this.setState({
        endDate: date
    }, () => 
    this.props.handleChangeStartOrEnd('eventDateEnd', date["_d"])
    );
  }


  render() {
    return (
    	<div>
    		<p>Editor Component</p>
        <a href="#/">to Display</a>
        <hr/>

        <form>
          Event Title:<br/>
          <input className="searchInput" type="text" value={this.props.eventTitle} onChange={this.props.handleInputChange.bind(this, 'eventTitle')} /><br/>
          Event Description:<br/>
          <input className="searchInput" type="text" value={this.props.eventDescription} onChange={this.props.handleInputChange.bind(this, 'eventDescription')} /><br/>
          Event Location:<br/>
          <input className="searchInput" type="text" value={this.props.eventLocation} onChange={this.props.handleInputChange.bind(this, 'eventLocation')} /><br/>
          
        
          Date Start:<br/>
          <DatePicker
              dateFormat="ddd ll"
              selected={this.state.startDate}
              selectsStart
              value={this.props.eventDateStart ? this.props.eventDateStart : this.state.startDate}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onChange={this.handleChangeStart}
          /><br/>


          Date End:<br/>
          <DatePicker
              dateFormat="ddd ll"
              selected={this.state.endDate}
              selectsEnd
              value={this.props.eventDateEnd ? this.props.eventDateEnd : this.state.endDate}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onChange={this.handleChangeEnd}
          /><br/>


        </form>

      </div>
    )
}
}

export default Editor;