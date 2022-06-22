import { useEffect } from "react";
import axios from "axios";

export default function App() {
  useEffect(() => {
    axios
      .get("http://test.api.weniv.co.kr/mall")
      .then((res) => console.log(res.data));

    fetch("http://test.api.weniv.co.kr/mall")
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(data));
  }, []);
  return <div></div>;
}
