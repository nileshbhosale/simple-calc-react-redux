import React from "react";
import { connect } from "react-redux";
import KeyComponent from './KeyComponent';

// Parenthesis Key component
class ParenthesisKey extends KeyComponent {
  constructor(props) {
    super(props);
    this.state = {
      type:"Parenthesis_Keypress"
    }
  }
}

export default connect()(ParenthesisKey);