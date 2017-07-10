import React, { Component } from 'react';
import { render } from 'react-dom';
import $ from "jquery"

class InjectApp extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }

  buttonOnClick = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    console.log("HELLO, " , $)
    return (
      <div style={{ position:"relative"}}>
        <div style={{ position:"fixed", bottom:"20px", left:"20px"}}>
        <h1>hello</h1>
      </div>
      </div>
    );
  }
}

window.addEventListener('load', () => {
  const injectDOM = document.createElement('div');
  injectDOM.className = 'inject-react-example';
  injectDOM.style.textAlign = 'center';
  document.body.appendChild(injectDOM);
  render(<InjectApp />, injectDOM);
});
