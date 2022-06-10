import { useState } from 'react';
import './App.css';

function App() {
  let [상품, 상품명] = useState([
    '트렌치 코트 추천',
    '아동 신발 추천',
    '주방 용품 추천',
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  return (
    <div>
      {상품.map((a, i) => {
        return (
          <div className="list">
            <h4>
              {상품[i]}
              <span
                onClick={() => {
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h4>
          </div>
        );
      })}
    </div>
  );
}

export default App;
