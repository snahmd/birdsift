import { useEffect } from "react";

import { worker } from "./mocks/browser";

worker.start();

function App() {
  useEffect(() => {
    fetch("https://birdsift.com/api/birds")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <h1>BirdSift</h1>
      <h2>Hello</h2>
    </>
  );
}

export default App;
