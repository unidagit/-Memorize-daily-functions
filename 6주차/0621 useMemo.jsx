import { useEffect, useMemo, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(0);
  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  });

  useEffect(() => {
    console.log("useEffect호출");
  }, [location]);
  return (
    <>
      <h2>하루에 몇끼 먹어요?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />

      <hr />
      <h2>어느나라에 있어요?</h2>
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기타자</button>
    </>
  );
}

export default App;
