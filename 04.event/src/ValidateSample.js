import React, { Component } from "react";
import "./ValidateSample.css";
class ValidateSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };
  //패스워드값변경
  handleChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
      //validated : 비교
    });
  };
  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidateSample;
