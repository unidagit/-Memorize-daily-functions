import { useState } from 'react';
import './App.css';

function App() {
  let [name, setName] = useState([
    '로꼬',
    '기리보이',
    '우원재',
    '코드쿤스트',
    '그레이',
    '빈지노',
    '죠지',
  ]);
  let [text, setText] = useState('');

  return (
    <>
      <div className="black-nav">
        <h4>출석부이름 추가&삭제하기</h4>
      </div>

      {/* 이름출력 */}
      {name.map((a, i) => {
        return (
          <div className="list">
            <h4>{name[i]}</h4>
            <button
              onClick={() => {
                let copy = [...name];
                copy.splice(i, 1);
                setName(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      {/* 입력창만들기 */}
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      {/* 추가버튼만들기 */}
      <button
        onClick={() => {
          let copy = [...name];
          copy.unshift(text);
          setName(copy);
        }}
      >
        이름추가
      </button>
    </>
  );
}

export default App;
