import React from "react";

import { connect } from "react-redux";
import KeyComponent from './KeyComponent';

// Number Key component
class NumberKey extends KeyComponent {
  constructor(props) {
    super(props);
    this.state = {
      type:"Number_Keypress"
    }
  }
}

export default connect()(NumberKey);