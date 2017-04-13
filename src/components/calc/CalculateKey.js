import React from "react";

import { connect } from "react-redux";
import KeyComponent from './KeyComponent';
import RaisedButton from 'material-ui/RaisedButton';


// Calculate Key component
class CalculateKey extends KeyComponent {
  constructor(props) {
    super(props);
    this.state = {
      type:"Calculate"
    }
  }

  render() {
    return (
        <RaisedButton 
        className="key-component" 
        label={"="} 
        primary={true} 
        onClick={this.handleClick}/>
    );
  }
}

export default connect()(CalculateKey);