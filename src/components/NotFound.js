import React from "react";
import Subheader from 'material-ui/Subheader';

import Divider from 'material-ui/Divider';

// Not found page component
export default class NotFound extends React.Component {
  // render
  render() {
    return (
    	<div>
	      <Subheader >
	        <h1>Page not found</h1>
	      </Subheader>
	      <Divider/>
      	</div>
    );
  }
}