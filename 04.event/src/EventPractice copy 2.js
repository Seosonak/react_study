import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
    username: "",
  };

  handleChange = (e) => {
    //state변경 함수
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = (e) => {
    alert(this.state.message + ":" + this.state.username);
    this.setState({ message: " ", username: "" });
  };

  render() {
    return (
      <div>
        <h1>이벤트연습</h1>
        <input
          type="text"
          name="username"
          placeholder="아무거나 입력"
          value={this.state.username}
          onChange={this.handleChange}
        ></input>

        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          value={this.state.message}
          onChange={this.handleChange}
        ></input>

        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
