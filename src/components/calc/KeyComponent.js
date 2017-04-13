import React from "react";
import RaisedButton from 'material-ui/RaisedButton';

// Key component
export default class KeyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type:"Clear"
    }
    // bind <this> to the event method
    this.handleClick = this.handleClick.bind(this);
  }

  // render
  render() {
    return (
      	<RaisedButton 
        className="key-component"
        label={this.props.value} 
        onClick={this.handleClick}/>
    );
  }

  handleClick(event){
    // delete the user
    this.props.dispatch({
      type : this.state.type,
      value : this.props.value
    });
  }
  
}
