import { useState } from 'react';

function App() {
  return <Hello age={16} />;
}

function Hello(props) {
  const [name, setName] = useState('영희');
  const [age, setAge] = useState(props.age);
  let msg = age > 19 ? '성인' : '청소년';

  return (
    <>
      <h1 className="black-nav">이름을 바꿔줘</h1>
      <h3>
        이름:{name} 나이:{age} {msg}
      </h3>
      <button
        onClick={() => {
          setName(name === '영희' ? '철수' : '영희');
          setAge(age + 1);
        }}
      >
        changeAgeName
      </button>
    </>
  );
}

export default App;
