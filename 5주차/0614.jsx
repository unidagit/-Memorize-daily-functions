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

  return (
    <>
      <div className="black-nav">
        <h4>출석부이름 정렬하기</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...name];
          copy.sort();
          setName(copy);
        }}
      >
        가나다순
      </button>

      {name.map((a) => {
        return (
          <div className="list">
            <h4>{a}</h4>
          </div>
        );
      })}
    </>
  );
}

export default App;
