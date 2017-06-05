import React, { Component } from 'react';

class Main extends Component {
	constructor(props) {
    super(props);
    this.state = {
      event: ''
    };
  }


  render() {
    return (
    	<div>
    		<p>Main Component</p>
          <a href="#/editor">to Editor</a>
          <hr/>
          
          <h2>{this.props.eventTitle}</h2>
          <p>{this.props.eventDescription}</p>

          <p>{this.props.eventLocation}</p> 
          <h5>from: {this.props.eventDateStart} to: {this.props.eventDateEnd}</h5>
            

    	</div>
    )
}
}

export default Main;