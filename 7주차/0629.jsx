import React from "react";
import { useState } from "react";

export default function Gugudan() {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = React.useRef(null);

  const onSubmitInput = (e) => {
    e.preventDefault();
    if (Number(value) === first * second) {
      setResult("정답:" + value);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      inputRef.current.focus();
    } else {
      setValue("");
      setResult("떙");
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <p>
        {first} 곱하기 {second}는?
      </p>
      <form onSubmit={onSubmitInput}>
        <input
          ref={inputRef}
          type="number"
          onChange={onChangeInput}
          value={value}
        ></input>
        <button>입력</button>
      </form>
      {result}
    </>
  );
}
