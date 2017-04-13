import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import "../stylesheet/main.scss";

// App component
export default class App extends React.Component {
  // render
  render() {
    const {children} = this.props;
    return (
      <MuiThemeProvider>
        <div>
          
          <div onKeyPress={this.handleKeyPress} >
            {children}
          </div>
          
        </div>
      </MuiThemeProvider>
    );
  }

  /*handleKeyPress (event) {
    if(event.key == '1'){
      console.log('For hadling key press events directly from keyboard')
    }
  }*/
}


