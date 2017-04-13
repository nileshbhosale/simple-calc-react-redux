import React from "react";
import { connect } from "react-redux";
import KeyComponent from './KeyComponent';
import RaisedButton from 'material-ui/RaisedButton';

// Clear Key Component
class ClearKey extends KeyComponent {
  constructor(props) {
    super(props);
    this.state = {
      type:"Clear"
    }
  }

  render() {
    return (
        <RaisedButton label={"AC"} className="key-component" secondary={true} onClick={this.handleClick}/>
    );
  }
}

export default connect()(ClearKey);