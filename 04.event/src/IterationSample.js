import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextID] = useState(5);

  //입력된 값으로 업데이트 시켜줌
  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    // eslint-disable-line no-unused-vars
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    }); //concat

    setNextID(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  //key값은 다 달라야함 키값 인덱스사용은 비추천
  return (
    <>
      <input value={inputText} onChange />
      <button>추가</button>
      <ul>{nameList}</ul>;
    </>
  );
};

export default IterationSample;
