import React, { useState } from "react";

const EventPractice = () => {
  //유저네임,메시지 초기값은 빈값 ''안에 문자가있을경우엔 해당문자가 초기값
  //set은 함수, state의 값을 바꿀수있는 역할

  const [username, setUsername] = useState(" ");
  const [message, setMessage] = useState(" ");

  //username의 state 값을 바꾼다
  const onChangeUsername = (e) => setUsername(e.target.value);

  //message의 state 값을 바꾼다
  //입력된 값으로 value 바꿈
  const onChangeMessage = (e) => setMessage(e.target.value);

  //클릭했을때 메시지와 유저네임을 띄움
  const onClick = (e) => {
    alert(username + ":" + message);
    setUsername(" "); //alert 실행 후 유저네임을 띄운 후 리셋됨(''는 빈문자)
    setMessage(" ");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick(); //엔터하면 원클릭실행 > alert을 띄워줌 (입력한 값이 뜬다)
    }
  };

  return (
    <div>
      <h1>이벤트연습</h1>
      <input
        type="text"
        name="username"
        placeholder="아무거나 입력"
        value={username} //const의 유저네임 자동업데이트
        onChange={onChangeUsername} //온체인지유저네임실행
      ></input>

      <input
        type="text"
        name="message"
        placeholder="아무거나 입력"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      ></input>

      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
