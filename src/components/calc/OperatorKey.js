import React from "react";
import { connect } from "react-redux";
import KeyComponent from './KeyComponent';

// Operator Key component
class OperatorKey extends KeyComponent {
  constructor(props) {
    super(props);
    this.state = {
      type:"Operator_Keypress"
    }
  }
}

export default connect()(OperatorKey);