import React from "react";
import { connect } from "react-redux";
import TextField from 'material-ui/TextField';


// Value Field component
export default class ValueField extends React.Component {
  // render
  render() {
    return (
      	<TextField 
        fullWidth={true} 
        value={this.props.value}
        floatingLabelFixed={true}
        floatingLabelText={this.props.preValue}
        className="text-field"/>
    );
  }
}