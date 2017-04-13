import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from 'react-flexbox-grid';
import OperatorKey from "./OperatorKey";
import ValueField from "./ValueField";
import NumberKey from "./NumberKey";
import ParenthesisKey from "./ParenthesisKey";
import CalculateKey from "./CalculateKey";
import ClearKey from "./ClearKey";

// Keypad component
export default class Keypad extends React.Component {
  // render
  render() {

    return (
    	 <Grid fluid  className="padding0">
    	 	 <Row>
		          <Col xs={3}>
		            <ParenthesisKey value={"("}/>
		          </Col>
		          <Col  xs={3}>
		            <ParenthesisKey value={")"}/>
		          </Col>
		          <Col  xs={3}>
		            <OperatorKey value={"^"}/>
		          </Col>
		          <Col xs={3}>
		            <ClearKey label={"/"}/>
		          </Col>
	        </Row>
	        <Row>
	          <Col xs={3}>
	            <NumberKey value={"1"}/>
	          </Col>
	          <Col  xs={3}>
	            <NumberKey value={"2"}/>
	          </Col>
	          <Col  xs={3}>
	            <NumberKey value={"3"}/>
	          </Col>
	          <Col xs={3}>
	            <OperatorKey value={"/"}/>
	          </Col>
	        </Row>
	        <Row>
	       	  <Col xs={3}>
	            <NumberKey value={"4"}/>
	          </Col>
	          <Col  xs={3}>
	            <NumberKey value={"5"}/>
	          </Col>
	          <Col  xs={3}>
	            <NumberKey value={"6"}/>
	          </Col>
	          <Col  xs={3}>
	            <OperatorKey value={"-"}/>
	          </Col>
	        </Row>
	        <Row>
	          <Col xs={3}>
	            <NumberKey value={"7"}/>
	          </Col>
	          <Col  xs={3}>
	            <NumberKey value={"8"}/>
	          </Col>
	          <Col  xs={3}>
	            <NumberKey value={"9"}/>
	          </Col>
	          <Col xs={3}>
	           <OperatorKey value={"*"}/>
	          </Col>
	        </Row>
	        <Row>
	          <Col xs={3}>
	            <NumberKey value={"0"}/>
	          </Col>
	          <Col  xs={3}>
	            <NumberKey value={"."}/>
	          </Col>
	          <Col  xs={3}>
	            <CalculateKey/>
	          </Col>
	          <Col xs={3}>
	            <OperatorKey value={"+"}/>
	          </Col>
	        </Row>
	      </Grid>
    );
  }
}