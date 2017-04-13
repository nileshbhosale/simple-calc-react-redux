import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from 'react-flexbox-grid';
import {Card} from 'material-ui/Card';
import ValueField from "./ValueField";
import Keypad from "./Keypad";

// Calculator component
class Calculator extends React.Component {
   constructor(props) {
    super(props);
  }
  // render
  render() {

    return (
    	<Card className="calculator">
    	 <Grid fluid>
    	 	<Row>
    	 		<Col xs={12}>
	           <ValueField 	value={this.props.value} preValue={this.props.preValue}/>
	        </Col>
    	 	</Row>
    	 	<Row>
    	 	 	<Col xs={12}>
    	 	 		<Keypad/>
    	 	 	</Col>
    	 	 </Row>
	     </Grid>
	    </Card>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
  if(state.calculator && state.calculator.value ){
    return {
      value: state.calculator.value,
      preValue: state.calculator.preValue,
      
    };
  }else{
    return {
      value: "",
      preValue: "",
    };
  }
}

export default connect(mapStateToProps)(Calculator);